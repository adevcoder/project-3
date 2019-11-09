module.exports = {
    "development": {
        "username": process.env.MYSQL_USERNAME,
        "password": process.env.MYSQL_KEY,
        "database": process.env.MYSQL_DBNAME,
        "host": process.env.MYSQL_HOST,
        "port": 3306,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "socal_charm",
        "host": "socal_charm",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
 }