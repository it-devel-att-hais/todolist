# TodoList App

Очень небольшое приложение Тудушка

## Backend
* Для бэкенда используется
  * Ruby 2.6.3
  * Rails 5.2.3
  * PostgreSQL в качестве базы данных (9.4)
  
## Frontend
* Для фронтенда используется
  * Angular ~9
  * npm для сборки зависимостей
  
## Быстрое разворачивание приложения через docker-compose
```
git clone https://github.com/it-devel-att-hais/todolist.git
cd todolist
TAG=dev docker-compose up
```
>  * Это запустит сборку приложений через docker-compose
>  * После сборки докер образов запустится поднятие приложения
>  * Прогонятся миграции
>  * Запустится Rails сервер
>  * Поднимется фронтенд с nginx'ом
>  * Приложение будет доступно локально на http://localhost/


## Вариант без докера
```
git clone https://github.com/it-devel-att-hais/todolist.git
cd todolist
```
* После этого в папке надо создать .env файл например .env.development
```
touch .env.development
```
Открыть файл и записать туда ваши настройки
```
DB_NAME=todo_list_db # Название бд
DB_HOST=localhost # Host где крутится бд (локально)
DB_PORT=5432 # Порт от бд постгрес
DB_USER=root # Ваш пользователь Postgresql
DB_PASSWORD=root # Ваш пароль от Postgresql
```
После этого надо экспортировать их в переменные окружения
```
export $(cat ./.env.development)
```
Далее устанавливаем все зависимости бекенда (выполнить команду)
```
cd todo-list-backend-api/
bundle
```
После этого можно создать бд и прогнать миграции
```
rake db:create
rake db:migrate
```
Можно дополнительно прогнать фикстурные данные
```
rake db:seed
```
И в конце концов запустить сервер командой
```
rails s
```
# Далее нужно поднять фронт
(Должен быть предустановлен ангуляр)
```
cd ../todo-list-ui/
npm install
ng serve
```
* Это установит все зависимости фронта и поднимет ангуляр на 4200 порту
* После этого можно открыть в браузере http://localhost:4200/

# Troubleshooting
* Приложение очень простое и многие случае не обработаны
* Например возврат ошибок с сервера и распечатка их на фронте
* Буквально два теста на беке ;)
* Нет тестов на фронте


Вообще мой основной аккаунт на гитлабе https://gitlab.com/users/it.devel.att/projects
