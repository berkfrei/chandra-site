# Berk — to-do queue

- **Chandra ready to deploy.** Brief is in `PROJECT_BRIEF.md`. Wire up Vercel + domain (`chandrafrei.com` per `IMM.json`) + any env vars. Push first commit to remote.
- **Dark mode demo is in the working tree.** Toggle + sunset-default theme system on master (commits `5d07457`, `f91dc35`, `8ba2617`). Decide whether to ship or revert before launch. Toggle doesn't fire on the IMM preview pane — root cause not yet found (looked like preview is served from a stale `.next-live` build on :3100 while edits hit dev on :4002; didn't get to confirm).
