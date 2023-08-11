# goit-nodejs-hw-01-CLI

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://monosnap.com/file/BaWgN36nSUP8xd2xtGNoqhrb3Idp7k

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/O5zdshPMOUi0C9UHltxego4wALnwUY

node index.js --action="get" --id fake-id-to-check-out-what-will-we-see-if-such-id-does-not-exist

https://monosnap.com/file/WnDg7HI30dRqakyHL92y9F4jS5n34z

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/ftOSOJQCHIf42q3xtGR2soi23Cg7js

node index.js --action="list"

https://monosnap.com/file/mDppzQFeYkON0AND9naQh2px9ltAEr

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/oxGl1tfMERur8llO8F4FohaDJdGudE

node index.js --action="list"

https://monosnap.com/file/3ffKuYTWnJbxpXsYGccNikV3FCJOOM

node index.js --action="remove" --id fake-id-to-check-out-what-will-we-see-if-such-id-does-not-exist

https://monosnap.com/file/af2YyVcuWBfojaANqTOhVd7dLeK2M9
