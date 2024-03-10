# Тестовое задание React

## 1. Секция "Я web-разработчик" (включая бургер меню).

### Preview

![Image](https://github.com/Leta1603/Krainet-test-task/blob/master/public/promo.png)

## 2. Секция "Чем я буду полезна".

### Preview

![Image](https://github.com/Leta1603/Krainet-test-task/blob/master/public/benefits.png)

## 3. Секция "Свяжитесь со мной".

Запрос, для отправки данных из формы на сервер осуществляется в случае, если все данные в форме валидны. в console.log выводится результат отправки.

### Preview

![Image](https://github.com/Leta1603/Krainet-test-task/blob/master/public/contacts.png)

![Image](https://github.com/Leta1603/Krainet-test-task/blob/master/public/contacts-with-error.png)

## Задание с числами Фибоначчи (написано в файле nthFibo.js):

```
function nthFibo(n) {
  let a = 1;
  let b = 0;
  if (n >= 1) {
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  }

  return b;
}
```
