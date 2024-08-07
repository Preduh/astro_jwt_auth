export { renderers } from '../../renderers.mjs';

const POST = async ({ cookies, redirect }) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30
      // optional, defaults to 60
    })
  });
  const data = await response.json();
  if (response.ok) {
    cookies.set("astro_jwt_auth.token", data.token, {
      maxAge: 30,
      path: "/"
    });
    return redirect("/");
  }
  return new Response(
    JSON.stringify({
      message: "Failed"
    }),
    { status: 400 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
