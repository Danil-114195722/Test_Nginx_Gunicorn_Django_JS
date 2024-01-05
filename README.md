# Test_Nginx_Gunicorn_Django_JS

.env file must contain the next info (template):
```dotenv
# Ключ django
SECRET_KEY='django-insecure-your-key'
# True/False
DEBUG=True-or-False
# IP/DNS через пробел
ALLOWED_HOSTS='your dns and/or ip'

# имя БД
MYSQL_DATABASE=db-name
# имя юзера
DB_USER=root
# пароль юзера
MYSQL_ROOT_PASSWORD=your-passwd
# IP БД
DB_HOST=db
# порт БД
PORT=33066
```
<hr>
