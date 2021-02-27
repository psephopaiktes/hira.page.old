#!/bin/sh

# Git用コミットメッセージを引数にとる
COMMENT=$1

# 引数がなかった場合は入力を待つ
if [ -z ${COMMENT} ]; then
  echo "please enter commit message:"
  read COMMENT
fi

# cache削除
rm -rf public/blog
rm -rf public/works

# Hugoビルド
cd hugo-amp-contents
hugo

# GitHubにpush
cd ..
git add -A
git commit -m "$COMMENT"
git push origin main
