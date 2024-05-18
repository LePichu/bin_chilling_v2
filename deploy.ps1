deno task lume

$SITEMAP = Get-Content -Path ".\_site\sitemap.xml"
Set-Content -Path ".\_site\sitemap.xml" -Value ($SITEMAP -Replace "http://localhost", "https://lepichudoes.deno.dev")
Set-Location ".\_site"

git init
git add . 
git commit -m "Deploy: $(Get-Date)"
git remote add master "https://github.com/LePichu/bin_chilling_v2_deployment"
git push master master --force

Set-Location "../"
