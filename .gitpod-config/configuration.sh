shopt -s dotglob
bash .gitpod-config/bash.sh
node .gitpod-config/bash.js
git push
gp sync-done build
