# Learn ES2015

### npm run watch - запуск скрипта

ECMAScript 2015 или ES6 летом 2015 был принят как официальный стандарт, и является самым крупным обновлением языка за почти 20 лет.

Как вы знаете JavaScript - это языка Интернета и, хотя еще не все функции ES6 реализованы в современных браузерах, я думаю сейчас самое время начинать использовать ES6. Так как рано или поздно мы все всё равно перейдем на новый стандарт!

Вы так же можете <a href="https://github.com/zanusilker/gulp/archive/master.zip">скачать</a> этот репозиторий 

## Материалы

**Видео**
- [Основы ES6](https://www.youtube.com/playlist?list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q)

**Советую почитать о ES6**
 - [Современный учебник JavaScript](http://learn.javascript.ru/es-modern)
 - [Babel JS](https://babeljs.io/docs/learn-es2015/) (на английском)
 - [ECMAScript 6](https://github.com/lukehoban/es6features) (на английском)
 - [ECMAScript 6 — New Features](http://es6-features.org/#Constants) о ES6 (на английском)
 
## Скрипты для package.json:
 - "build": "babel src -d dist --presets es2015" (npm run build)
 - "watch": "babel src -d dist --presets es2015 -w" (npm run watch)