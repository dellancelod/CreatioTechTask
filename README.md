# UsrTestTask — заявки на обладнання

Тестове завдання для позиції Backend Developer (Creatio).

Реалізовано модуль для роботи із заявками на обладнання:

- довідник пріоритетів: `Низький`, `Середній`, `Високий`;
- об'єкт `UsrEquipmentRequest`;
- Freedom UI сторінка списку та запису;
- серверний розрахунок загальної суми;
- серверна валідація кількості та дати виконання;
- REST-сервіс для отримання заявок за контактом;
- бонусний SQL-запит для сум у місяць за пріоритетами.

## Середовище

Розробка та тестування виконувалися на:

- Creatio 10.0.0 (PostgreSQL);
- Windows;
- IIS;
- PostgreSQL;
- Redis;
- File System Development Mode.

1. Спочатку було завантажено та розпаковано 10.0.0.858_SalesEnterprise_Marketing_ServiceEnterprise_Softkey_PostgreSQL_ENU.zip.

2. Увімкнено Internet Information Services.
 
Всередині IIS було встановлено:
```
Web Management Tools
    IIS Management Console

World Wide Web Services
    Application Development Features
        .NET Extensibility
        ASP.NET
        ISAPI Extensions
        ISAPI Filters

    Common HTTP Features
        Default Document
        Static Content
        HTTP Errors
    Security
        Request Filtering
        Basic Authentication
        Windows Authentication
.NET Framework 4.x Advanced Services
    ASP.NET
    WCF Services
        HTTP Activation
```
3. Було встановлено PostgreSQL Serer 11, Command Line Tools та pgAdmin для роботи з БД. Creatio рекомендує окремо мати адміністративного користувача PostgreSQL для deployment і менш привілейованого користувача для самої програми, тому було створено двух користувачів: creatio_sysadmin та creatio_app. Було створено базу даних creatio_test
```powershell
.\psql.exe --host localhost --port 5432 --username=creatio_sysadmin --dbname=postgres --command "CREATE DATABASE creatio_clean WITH OWNER=creatio_app ENCODING='UTF8' CONNECTION LIMIT=-1"
```
та запущено backup _BPMonline1000SalesEnterprise_Marketing_ServiceEnterprise.backup_. Після цього, за рекомендацією з документації, було запущено скрипт CreateTypeCastsPostgreSql.sql та ChangeDbObjectsOwner.sql. Під час виконання останнього ставалася помилка, що потребувало збільшити max_locks_per_transaction з 64 до 1024 бо інакше ChangeDbObjectsOwner.sql був лімітований по кількості одночасно залочених об'єктів.

4. Було піднято Redis, бо Creatio використовує його як cache/session server. Вирішив, що найпростіше буде зробити це через Docker.

5. Налаштував ConnectionString.config.

6. Налаштував права на директорію, на майбутнє для File System Development Mode.

7. Створив Application Pool у IIS.

8. Створив сайт Creatio в IIS.

9. Запустив Creatio на localhost:8080.

10. У Web.config було змінено fileDesignMode на true, a UseStaticFileContent на false - таким чином було увімкнено режим розробки у файловій системі. Після цього пакет `UsrTestTask` вивантажувався з Creatio у *Terrasoft.Configuration/Pkg/UsrTestTask*.

11. Створювати Git репозитарій у самій папці Pkg потребувало би дуже об'ємний .gitignore, тому було вирішено вигружати файли пакету в іншу папку. Для зручності був написаний скріпт для PowerShell.

*syncpackage.ps1:*
```bash
$source = "D:\Creatio\Terrasoft.WebApp\Terrasoft.Configuration\Pkg\UsrTestTask"
$target = "$PSScriptRoot\UsrTestTask"

robocopy $source $target /MIR

if ($LASTEXITCODE -lt 8) {
    Write-Host "UsrTestTask synced successfully."
    exit 0
}

exit $LASTEXITCODE
```

І тоді workflow перетворився на: 

_Додати feature в Creatio -> Comple -> Download packages to file system -> syncpackage.ps1 -> commit_

### Виниклі проблеми

1. Під час розгортання Creatio в локальному середовищі, виникла критична проблема з доступом до бази даних PostgreSQL. Перечитавши документацію помітив, що рекомендується PostgreSQL 11+, тобто версії 11 та більше. Встановивши спочатку останню 18 версію, я вирішив відкотитися до 11, аби мати еталонне середовище, яке описувала документація. Таким чином проблема була вирішена.

2. Після розгорання Creatio у локальному середовищі стикнувся з проблемою довгого завантаження сторінок, що спершу було розцінено мною як неправильне налаштування середовища. Під час розробки дослідив, що зависання виникають коли використовується два і більше WebSockets, тому працюючи з Creatio необхідно було мати лише одну відкриту вкладинку.

3. Під час створення об'єкта UsrRequestPriority, стикнувся з неможливістю обрати батьківський клас BaseLookup, що в свою чергу наслідується від BaseObject для того, щоб побудувати правільну архітектуру. Дослідивши питання, я перейшов на Package Dependencies Diagram, щоб побачити які packets dependencies має мій UsrTestTask. Встановив залежність від пакету CrtCore як це рекомендує сама документація Creatio.

4. Спочатку створив FreedomUI сторінки у Application Hub, але потім зрозумів, що папка цього додатку знаходиться за межою UsrTestTask. Встановив CurrentPackageId Defaul value = UsrTestTask у System Settings для уникнення роботи поза межою пакету.

5. Декілька мінорних проблем, як от наприклад у Postman, щоб виконати запит до Creatio REST Api потрібно спочатку пройти аутентифікація через POST-запит до сервису аутентифікації AuthService.svc, для цього у Postman треба було відключити проксі у налаштуваннях.

## Встановлення пакета

Для встановлення пакета у чистий екземпляр Creatio:

1. Увімкніть режим розробки у файловій системі.
2. Клонуйте цей репозиторій.
3. Скопіюйте `UsrTestTask` до:
`Terrasoft.Configuration/Pkg/UsrTestTask`
4. Відкрийте Creatio → Конфігурація.
5. Виконайте команду **Оновити пакети з файлової системи**.
6. Згенеруйте вихідний код.
7. Компілюйте конфігурацію.
8. Оновіть структуру бази даних.
9. За потреби перезапустіть застосунок.
10. Переконайтеся, що розділ Equipment Requests доступний.

Значення довідника пріоритетів включені до даних пакета та встановлюються разом із ним.

## Бізнес-логіка

Перед збереженням `UsrEquipmentRequest` серверний `EntityEventListener`:

- розраховує:

```text
Загальна сума = Кількість ? Ціна за одиницю
```

- забороняє збереження, якщо `Кількість <= 0`;
- забороняє збереження, якщо дата виконання знаходиться в минулому.

## REST API

Метод повертає заявки конкретного контакту, відсортовані за датою виконання.

### Запит

```http
GET /0/rest/UsrEquipmentRequestService/GetRequestsByContact?contactId={CONTACT_ID}
```

Запит виконується після авторизації в Creatio.

### Приклад відповіді

```json
[
  {
    "name": "Laptop",
    "priority": "Високий",
    "totalAmount": 45000.0,
    "executionDate": "2026-09-25T00:00:00"
  },
  {
    "name": "Monitor",
    "priority": "Середній",
    "totalAmount": 12000.0,
    "executionDate": "2026-09-28T00:00:00"
  }
]
```

Для доступу до даних використовується `EntitySchemaQuery`, без прямого SQL.

## SQL

Бонусний SQL-запит знаходиться у:

```text
sql/current_month_totals.sql
```

Він повертає загальну суму заявок за кожним пріоритетом за поточний місяць.

## Деплой верифікація

Package був додатково протестований на чистій установці Creatio - функціональність залишилася незмінною.

## Скриншоти

У директорії `screenshots/` розміщені приклади:

- сторінки заявки;
- серверної помилки валідації;
- відповіді REST-сервісу в Postman.

## Витрачений час

Орієнтовний час виконання зайняв **~10 годин**.
