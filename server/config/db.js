module.exports = {
    development: {
      dialect: "sqlite",
      storage: "./db.development.sqlite"
    },
    production: {
      username: 'root',
      password: '12345678',
      database: 'navi',
      host: '127.0.0.1',
      port:'3306',
      dialect: 'mysql',
    }
  };
  