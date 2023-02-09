# 📦 Workflow - Full TypeScript WebApp

This repository acts as a template for a, containerized fully coded in ***TypeScript***, WebApp.

Stack: **React + Node.js + Express + MySQL**

*It's currently being developed and no major version has been yet achieved.*

## 🚀 Launch the project

The project is being containerized thanks to [**Docker**](https://www.docker.com).
Install Docker if you don't already have it on your machine and launch the daemon before trying to launch this project.

The `back` and `local-db`containers both need environment variables to setup.
The containers will try to load up environment files that aren't anywhere to be found after cloning the repository.
This is totally normal, as of right now, as the project only has a local development environment for containerization and these env files shouldn't be pushed on Git because they are local environment files (they may vary from one user to the other).

1. You should *manually create* env files for containers that require them.
Below are the 2 env files you must create before launching the project (with some default values you can freely modify):

##### ./back/.env
```bash
NODE_ENV=development
PORT=8080

DB_HOST=local-db
DB_PORT=3306
DB_DATABASE=db
DB_USER=root
DB_PASSWORD=password
```

##### ./local-db/.env
```bash
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_ROOT_HOST=%
MYSQL_DATABASE=db
MYSQL_ROOT_PASSWORD=password
```

2. After setting up the env files, you should have a terminal opened at the root of the repository and run the following command:
```bash
docker-compose build && docker-compose up
```

If you don't want your terminal to loop indefi√nitely after the launch, you can rerun the above command adding the `-d` option at the end to detach the launch.
