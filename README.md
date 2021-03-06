# tql

Библиотека для унификации некоторых видов запросов к БД.

Проблема:

- Эффективные запросы к БД требуют высокой квалификации разработчиков
- Снизив вариативность запроса, можно попробовать упростить работу с БД

Постановка задачи

Опишем типовую задачу - фильтрация при получении выборки из БД:

- Фильтр задается с помощью логического выражения
- Логическое выражение вычисляется на основе каких-то признаков 
- Признаком может быть либо какое-то измеримое свойство, либо характеристика наблюдаемого явления
- Признаки можно выделять, что может помочь при интерпретации данных
- Признаки могут изменяться

Идея заключается в том, чтобы помечать документы специальными тегами, которые будут выступать в роли этих признаков.

Вариативность запроса снизиться из-за того, что запрос будет осуществляться по заранее заданному набору полей. 
