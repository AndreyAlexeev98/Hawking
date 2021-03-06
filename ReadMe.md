# Осталось по проекту

1. Сделать адаптив, привести к пиксель перфект;
2. Раскидать все компоненты по отдельным файлам;
3. Создать миксины pug для переиспользуемых элементов;
4. Убрать все цвета в переменные;
5. Разобраться с прыгающими шрифтами при загрузке


# Документация к сборке

В ней есть оптимизация и минимизация:

1. JavaScript
2. SCSS
3. HTML (PUG)
4. Gulp-dev-server


----

## Установка

Склонируйте к себе репозиторий **git clone https://github.com/AndreyAlexeev98/TestBooking.git**

Запустите  **npm install** для установки пакетов

---

##### Для разработки:

Команда **npm run start**

Запускается dev-сервер по адресу http://localhost:3000/, с обновлением после сохранения файлов

---

##### Для продакшена:

Команда - **npm run stylelint** и **npm run eslint**

Приводит стили и JS скрипты к соответствующему style guide и виду

Команда - **npm run build**

Создает/обновляет содержимое папки dist, которая содержит код для продакшена

---

##### Описание GULP тасков:

1. Task **clean** - очищает собранный для продакшена проект (файлы папки dist)

2. Task **fonts** - копирует файлы шрифтов

3. Task **images** - сжимает картинки и копирует

4. Task **scripts** - организует модульность JS скриптов

5. Task **server** - следит за файлами и запускается после сохранения в случае их изменения

6. Task **styles** - обработка стилей с помощью PostCss, подключение автопрефиксера, использование NormoLize Css

7. Task **svgSprite** - Сборка svg спрайта (все изображения, помещенные в папку /src/sprite - будут собраны в спрайт)

8. Task **svgSprite** - Компилируем PUG

.browserlistrc - Указываем версии поддерживаемых браузеров для автопрефиксера

---