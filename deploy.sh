#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

git add dist -f
git commit -m "update web"
git subtree push --prefix dist origin main

cd -
