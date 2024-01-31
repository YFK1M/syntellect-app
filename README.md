# Тестовое задание

Необходимо разработать два компонента-контрола.

## Контрол с кнопками
Текстовый контрол, который позволяет настраивать и выводить разное кол-во кнопок слева и справа от самого контрола. Для кнопок должна быть возможность настроить `текст` и `колбек функцию`, которая вызывается при нажатии на кнопку.

В основном компоненте приложения нужно сделать два контрола для тестирования:

```
Контрол с 2 кнопками справа;
При нажатии на первую кнопку очищается содерживое в контроле;
При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';
```
```
Контрол с 1 кнопкой справа и 1 кнопкой слева;
При нажатии на кнопку справа вызывается alert с текстом в контроле;
При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через alert;
```
	
## Контрол-автокомплит

Текстовый контрол, который позволяет выводить подсказки при наборе текста. Подсказки выводятся под контролом в виде выпадающего списка. В подсказках должно выводиться `наименование`, `полное наименование` и `флаг`. При выборе подсказки, значение из неё проставляется в контрол.

Для получения подсказок в тестовом проекте есть асинхронная функция имитирующая API - `apiService/getCountryByName`. Подсказки могут дублироваться и ответ от api сервиса может быть разным - это нужно учитывать.

Контрол должен иметь настройку максимального кол-ва выводимых подсказок.

В основном компоненте приложения нужно сделать два контрола для тестирования:
```
Максимальное кол-во подсказок - 3
```
```
Максимальное кол-во подсказок - 10
```

## Требования:
- использовать минимум сторонних библиотек и зависимостей
- использовать [MobX](https://mobx.js.org/)
- использовать MVVM подход при реализации контролов
- переиспользовать общие части контролов, если такие будут
- стилизацией можно не заморачиваться, но если все будет сделано красиво - это только плюс
