# Learn Backend RESTful with NODEJS & Express

- Để chạy CSDL thì cần run Docker
- Dùng DBeaver để kết nối đến MySql
- Project này sử dụng Node ver 14.17.0
- Khi dùng biến môi trường ENV thì cần phải import nếu không môi trường NodeJS sẽ không hiểu

```js
//! import required
require("dotenv").config();

// Cách dùng
process.env.DB_HOST;
```

# MongoDB

Vì sử dụng Docker tạo DB nên dùng port 27018 tránh trùng port với mongodb server

```
mongodb://root:123456@localhost:27018
```
