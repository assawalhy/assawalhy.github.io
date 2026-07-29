## Run the local dev server

User `make` command to run the local dev server which should tell the server to use the localhost link as the base URL.

## Git operations

Use `SSH_ASKPASS` when pulling, pushing, or otherwise interacting with the remote origin to handle SSH key passphrase prompts.

Use `DISPLAY=$(ip route show | grep 'default via' | awk '{ print \$3 }'):0` for the display when running from WSL. Wrap in `sh -c` with single quotes to avoid PowerShell interpolation of `$()`:

```
wsl -d Ubuntu -- sh -c 'cd /home/ms/myp/assawalhy.xyz && DISPLAY=$(ip route show | grep "default via" | awk "{ print \$3 }"):0 SSH_ASKPASS=/usr/bin/ssh-askpass SSH_ASKPASS_REQUIRE=force timeout 30 git push 2>&1'
```
