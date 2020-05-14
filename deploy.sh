#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# Gitee
git push git@gitee.com:LuckRain/lucky-ui.git master

# GitHub
git push git@github.com:LuckRain7/lucky-ui.git master

# 打包
npm run build

# 进入生成的文件夹
cd dist

# 添加 git 信息
git init
git add -A
git commit -m 'deploy'

# Gitee
git push  -f git@gitee.com:LuckRain/lucky-ui.git master:gh-pages

# GitHub
git push  -f git@github.com:LuckRain7/lucky-ui.git master:gh-pages

cd -