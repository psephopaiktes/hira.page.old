#!/bin/sh

cd hugo-amp-contents

# Draft状態の記事を配列に取得
DRAFTS=($(hugo list drafts))

# どの記事を編集したいか選択させる
echo "Select draft number:"
select DRAFT in ${DRAFTS[@]}
do
  # 記事ファイルを開く
  open $DRAFT
  open ${DRAFT%/index.md}

  # 記事ページを表示 文中先頭の`content/`と末尾の`/index.md`は削除する
  DRAFT=${DRAFT#content/}
  hugo server -D & open http://localhost:1313/${DRAFT%/index.md}

  break
done
