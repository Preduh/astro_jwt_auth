import type { APIRoute } from "astro"

interface LoginResponse {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
  refreshToken: string
}

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30, // optional, defaults to 60
    }),
  })

  const data: LoginResponse = await response.json()

  if (response.ok) {
    cookies.set("astro_jwt_auth.token", data.token, {
      maxAge: 300,
      path: "/",
    })

    return redirect("/")
  }

  return new Response(
    JSON.stringify({
      message: "Failed",
    }),
    { status: 400 }
  )
}
