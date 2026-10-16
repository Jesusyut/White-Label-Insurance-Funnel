# Insurance Quote Quiz Funnel

A mobile-first, one-question-per-screen auto insurance lead funnel for independent agencies.

## Customize

Edit `src/config.ts` to change the agency name, initials, colors, phone number, webhook URL, calendar URL, carriers compared, affinity choices, vehicle makes, and key shared copy.

For quick demos, URL parameters override the agency and primary color:

```
/?agency=Acme%20Insurance&color=%231c6b63
```

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the main funnel at `/` and the device-local demo lead inbox at `/admin`.

## Lead delivery

Set `webhookUrl` in `src/config.ts`. The funnel sends flat JSON with `status: "partial"` after the name/email step and `status: "complete"` after the final step. UTM fields, referrer, `lead_score`, and `lead_tier` are included.

When no webhook is configured—or when it is unreachable—the full submission remains available in the `/admin` demo inbox through local browser storage.

## Deploy to Render

1. Push this folder to a Git repository.
2. In Render, choose **New → Blueprint** and select the repository.
3. Render reads `render.yaml`, runs the production build, and publishes the static site.
4. The included metadata is configured for `https://white-label-insurance-funnel.onrender.com`.

No backend or environment variables are required.
