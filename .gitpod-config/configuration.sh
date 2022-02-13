shopt -s dotglob
bash .gitpod-config/dependencies.sh
node .gitpod-config/package.js
git push
gp sync-done build
