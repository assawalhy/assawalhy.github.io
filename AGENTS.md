## Commit/Push policy

Never commit or push unless explicitly instructed. If you think committing or pushing would be beneficial, ask first before doing so.

## Run the local dev server

The site is an Astro project. Run the local dev server with:

```bash
npm run dev     # Astro dev server (http://localhost:4321)
npm run build   # Production build to dist/
npm run preview # Serve the production build
```

Run the UI regression tests with:

```bash
npm test
```

## Git operations

Use `SSH_ASKPASS` when pulling, pushing, or otherwise interacting with the remote origin to handle SSH key passphrase prompts.

Use `DISPLAY=$(ip route show | grep 'default via' | awk '{ print \$3 }'):0` for the display when running from WSL. Wrap in `sh -c` with single quotes to avoid PowerShell interpolation of `$()`:

```
wsl -d Ubuntu -- sh -c 'cd /home/ms/myp/assawalhy.xyz && DISPLAY=$(ip route show | grep "default via" | awk "{ print \$3 }"):0 SSH_ASKPASS=/usr/bin/ssh-askpass SSH_ASKPASS_REQUIRE=force timeout 30 git push 2>&1'
```
