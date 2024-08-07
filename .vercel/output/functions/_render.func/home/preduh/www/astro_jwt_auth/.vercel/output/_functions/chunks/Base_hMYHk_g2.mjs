import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot } from './astro/server_DMt10Gl9.mjs';
import 'kleur/colors';
import 'clsx';

const $$Base = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/home/preduh/www/astro_jwt_auth/src/layouts/Base.astro", void 0);

export { $$Base as $ };
