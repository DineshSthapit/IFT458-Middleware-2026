PS ...\backend> git status
On branch middleware-implementation
Changes not staged for commit:
  modified:   ../mobile/package-lock.json
  modified:   ../mobile/package.json

Untracked files:
  ServerStudent.MD

PS ...\backend> git add ServerStudent.MD

PS ...\backend> git commit -m "Add ServerStudent documentation - Hamed Solaiman"
[middleware-implementation 656a348] Add ServerStudent documentation
 1 file changed, 25 insertions(+)
 create mode 100644 backend/ServerStudent.MD

 PS ...\backend> git add ../screenshots/backend_running.png

PS ...\backend> git commit -m "Add backend screenshots - Hamed Solaiman"

PS ...\backend> git push origin middleware-implementation --force
To https://github.com/DineshSthapit/IFT458-Middleware-2026.git
 + 656a348... [new hash] middleware-implementation -> middleware-implementation (forced update)