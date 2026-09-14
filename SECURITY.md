# Security Posture — NeuronX26

## Architecture Overview
NeuronX26 is a statically generated Next.js application designed to minimize attack surface. It functions primarily as a public-facing informational portal.
- **Frontend Framework**: Next.js (App Router)
- **Deployment**: Static / Edge compatible (no complex stateful backends)
- **Data Model**: Static configuration (e.g., `eventConfig.ts`) and static assets.
- **Authentication**: None. There are no users, admins, or session cookies managed by this application.

## Security Headers
The following security headers are enforced via `next.config.ts`:
- **Content-Security-Policy (CSP)**: Strictly controls where resources can load from.
  - `default-src 'self'`
  - `script-src` and `style-src` restricted.
  - `img-src` restricted to `'self'`, `blob:`, `data:`, and `https://images.unsplash.com`.
  - `frame-ancestors 'none'` and `object-src 'none'` to block malicious framing and embeddings.
- **X-Frame-Options: DENY**: Defense-in-depth clickjacking protection.
- **X-Content-Type-Options: nosniff**: Prevents MIME-sniffing vulnerabilities.
- **Referrer-Policy: strict-origin-when-cross-origin**: Minimizes data leakage to third-party domains.
- **Permissions-Policy**: Disables unused browser APIs (camera, microphone, geolocation, etc.) to limit abuse.
- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections for 2 years, including subdomains.

## Dependency Management
- Dependencies are regularly audited using `npm audit`.
- The `lucide-react` icons and other third-party dependencies are kept up-to-date to patch vulnerabilities.

## Secret Management
- **No API keys or secrets** are currently required or hardcoded into the codebase.
- We do not use `.env` files for secrets since this is a public-facing static application.
- If future integrations (like CMS or Analytics) require API keys, they must be injected securely at build time via CI/CD secrets and prefixed with `NEXT_PUBLIC_` *only* if required on the client side. Private backend secrets must never use `NEXT_PUBLIC_`.

## Supported Reporting Method
If you discover a potential security vulnerability in NeuronX26, please do not disclose it publicly. Contact the organizers directly through our official channels.

## Known Limitations
- The site relies on external links for registration (Google Forms) and social media (Instagram). These are standard `<a>` tags with `rel="noopener noreferrer"`.
- `unsafe-inline` is currently permitted in `style-src` to support dynamic GSAP and Framer Motion layout styling, which is standard for animated React applications.
