deno task lume

Set-Location ".\_site"

git init
git add . 
git commit -m "Deploy: $(Get-Date)"
git remote add master "https://github.com/LePichu/bin_chilling_v2_deployment"
git push master master --force

Set-Location "../"