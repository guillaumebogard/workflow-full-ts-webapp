module.exports = {
  "development": {
    "dialect":         "mysql",
    "username":        process.env.DB_USER,
    "password":        process.env.DB_PASSWORD,
    "host":            process.env.DB_HOST,
    "port":     Number(process.env.DB_PORT),
    "database":        process.env.DB_DATABASE,
  },
  "production": {
    "dialect":         "mysql",
    "username":        process.env.DB_USER,
    "password":        process.env.DB_PASSWORD,
    "host":            process.env.DB_HOST,
    "port":     Number(process.env.DB_PORT),
    "database":        process.env.DB_DATABASE,
  }
}
