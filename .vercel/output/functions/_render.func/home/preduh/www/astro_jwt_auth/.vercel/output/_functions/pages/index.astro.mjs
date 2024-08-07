/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, a as renderComponent, e as createAstro, F as Fragment } from '../chunks/astro/server_BcXQoLC4.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BI1lROPk.mjs';
import { $ as $$Base } from '../chunks/Base_DPcqA78Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.locals.user;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` <h1>Welcome ${user?.firstName}</h1> ${user ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": user.image, "alt": "User image", "inferSize": true, "format": "png" })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {})}`}<a href="/login">Login</a> ` })} </body></html>`;
}, "/home/preduh/www/astro_jwt_auth/src/pages/index.astro", void 0);

const $$file = "/home/preduh/www/astro_jwt_auth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
