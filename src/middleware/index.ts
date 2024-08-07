import { defineMiddleware } from "astro:middleware"

interface CurrentUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}

const protected_routes = ["/"]

export const onRequest = defineMiddleware(async ({ cookies, url, redirect, locals }, next) => {
  if (protected_routes.includes(url.pathname)) {
    const token = cookies.get("astro_jwt_auth.token")?.value

    if (!token) {
      return redirect("/login")
    }

    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data: CurrentUser = await response.json()

    locals.user = data
  }

  return next()
})
