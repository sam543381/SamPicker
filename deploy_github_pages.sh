#!/bin/sh

echo Building Angular App
ng build --prod --base-href SamPicker
echo Done
sleep 1

echo 'Making copy of dist/samsam in docs/'
rm -Rf ./docs
mkdir -p docs
cp -r ./dist/samsam/* docs/
echo Done
sleep 1

echo Duplicating index.html to 404.html
cp docs/index.html docs/404.html
echo Done
sleep 1
