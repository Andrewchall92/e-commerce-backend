# E-Commerce Backend ![MIT](https://img.shields.io/badge/MIT-blue)

## Description
This is a back-end only application that uses Express.js to query a local MySQL database generate with Sequelize for an e-commerce website. It allows users to perform CRUD operations on the products, categories, and tags of the online store using RESTful API routes.

[Watch Demo Video](https://watch.screencastify.com/v/iIHBq3XalZFg3zocnvba)

## Installation
To use this application, you need to have Node.js and MySQL installed on your machine. You also need to create a .env file in the root directory of the project with the following variables:

- DB_NAME='ecommerce_db'
- DB_USER='your_mysql_username'
- DB_PW='your_mysql_password'

Then, you can install the required dependencies by running npm install in the terminal. This will install Express.js, Sequelize, dotenv, mysql2 and nodemon packages.


Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node.js    | [https://nodejs.org/en](https://nodejs.org/en) | 
| MySQL     | [https://dev.mysql.com/doc/mysql-getting-started/en/](https://dev.mysql.com/doc/mysql-getting-started/en/)      |   
| Express.js | [https://expressjs.com/en/starter/installing.html](https://expressjs.com/en/starter/installing.html)     | 
| Sequelize  | [https://sequelize.org/docs/v6/getting-started/](https://sequelize.org/docs/v6/getting-started/)  |
| dotenv  | [https://www.dotenv.org/docs/](https://www.dotenv.org/docs/)  |
| mysql2  | [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2)  |
| nodemon  | [https://nodemon.io/](https://nodemon.io/)  |


## Usage

To create and seed the database, run the following commands in the terminal:

- mysql -u root -p
- source db/schema.sql
- exit
- npm run seed

To start the server, type npm run watch in the terminal. This will sync the Sequelize models to the MySQL database and listen for requests on port 3001.

## Testing

To test the API routes, you can use a tool like [Insomnia](https://docs.insomnia.rest/). The available routes are:

- GET /api/categories to get all categories
- GET /api/categories/:id to get one category by id
- POST /api/categories to create a new category
- PUT /api/categories/:id to update a category by id
- DELETE /api/categories/:id to delete a category by id
- GET /api/products to get all products
- GET /api/products/:id to get one product by id
- POST /api/products to create a new product
- PUT /api/products/:id to update a product by id
- DELETE /api/products/:id to delete a product by id
- GET /api/tags to get all tags
- GET /api/tags/:id to get one tag by id
- POST /api/tags to create a new tag
- PUT /api/tags/:id to update a tag by id
- DELETE /api/tags/:id to delete a tag by id

The data for each route is displayed in a formatted JSON. You can also use the db/seeds.sql file as a reference for the data structure and values.


## License
This project is licensed under the [MIT License](LICENSE).

## Questions

[My GitHub Profile](https://github.com/Andrewchall92)

