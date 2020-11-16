#!/bin/sh
select VAR in pwd ls exit
do
#繰り返しの中でcase分を使用している。
    case $VAR in
  "ls" ) ls -1 ;;
  "pwd" ) pwd ;;
  "exit" ) break ;;
  * ) echo "あなたの入力した番号は$REPLYです"
    esac
done
