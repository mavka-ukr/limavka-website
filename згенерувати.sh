#!/usr/bin/env sh

for pkg in xdocs sass; do
  if ! npm list -g --depth=0 "$pkg" >/dev/null 2>&1; then
    echo "Installing $pkg globally..."
    npm install -g "$pkg"
  else
    echo "$pkg is already installed globally."
  fi
done

VERSION="$(cat "ВЕРСІЯ")"

rm -rf ".будування/документація"
rm -rf ".будування/версії/$VERSION"

докс перетворити --вхід=документація --вихід=".будування/версії/$VERSION/документація" --вигляд=тема
докс перетворити --вхід=документація --вихід=".будування/документація" --вигляд=тема
cp -a ресурси index.html 404.html robots.txt .будування
докс карта --вхід=.будування --вихід=.будування --домен=лі.мавка.укр
find .будування -type f -name "*.html" -exec sed -i "s/{{МІТКА_ЧАСУ}}/$(date +%s)/g" {} \;
find .будування -type f -name "*.html" -exec sed -i "s/{{ВЕРСІЯ_ЛІМАВКИ}}/$VERSION/g" {} \;

find .будування/версії -type f -name "*.html" -exec sed -i "s/{{ВЕРСІЯ_ЛІМАВКИ_УМОВНО}}/ $VERSION/g" {} \;
find .будування/документація -type f -name "*.html" -exec sed -i "s/{{ВЕРСІЯ_ЛІМАВКИ_УМОВНО}}//g" {} \;

