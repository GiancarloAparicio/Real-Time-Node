# Chat with Express

![Express](docs/badges/express.svg)&nbsp;
![TypeScript](docs/badges/typescript.svg)&nbsp;
![Node](docs/badges/node.svg)&nbsp;
![Mysql](docs/badges/mysql.svg)&nbsp;

![JavaScript](docs/badges/javascript.svg)&nbsp;
![Vue](docs/badges/vue.svg)&nbsp;

![Bootstrap](docs/badges/bootstrap.svg)&nbsp;
![CSS](docs/badges/css.svg)&nbsp;
![Pug](docs/badges/pug.svg)&nbsp;

![Docker](docs/badges/docker.svg)&nbsp;
![Docker-compose](docs/badges/docker-compose.svg)&nbsp;


## Requirements

* Docker 19.0.0+
* Docker-Compose 1.2.0+


## Install

Clone the repository:

    git clone git@github.com:GiancarloAparicio/Real-Time-Node.git

Create and lift the containers
    
    docker-compose up -d


Install dependencies

    docker exec -it chat-node sh

    npm install && npm run serve 
    

By default the page will be displayed in:

    http://localhost:8000/chat 

### Preview Gif

![Gif](./docs/images/chat.gif)

### Preview Image

![Register](./docs/images/register.png)

![Login](./docs/images/login.png)

![Chat](./docs/images/chat.png)


### MySql

To activate MySql change the .ENV variables, the ORM TyOrm was used

By default Docker is already prepared to support MySql in the same internal network


Warning: It is not used in production, it is only a demo with basic functionalities.

### Credits

* Boilerplate: https://github.com/GiancarloAparicio/Template-Express
* Bootstrap: https://getbootstrap.com/