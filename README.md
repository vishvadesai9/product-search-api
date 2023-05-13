# Product Search API

This is a Node.js Express application for a product search API. The API provides an endpoint to search the product data. The app is hosted on Render and can be accessed on [https://employee-api-3ho1.onrender.com/](https://product-search-nmoy.onrender.com/)

![Postman SS](/api_img.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- Postgres Database

### Installing

1. Clone the repository
    ```
    git clone https://github.com/vishvadesai9/product-search-api.git
    ```
2. Navigate to the project directory
    ```
    cd product-search-api
    ```
3. Install the dependencies
    ```
    npm install
    ```
4. Create a `.env` file in the root of your project and insert your key-value pairs in the following format of `KEY=VALUE`:
    ```
    DB_USERNAME=your_postgres_username
    DB_PASSWORD=your_postgres_password
    DB_DATABASE=your_database_name
    DB_HOST=your_database_host
    ```
5. Run the project
    ```
    node src/index.js
    ```

## Usage

### Search Products

This endpoint allows you to search the product data.

- **URL:** `/search`
- **Method:** `GET`
- **URL Params:**
    - `tags=[string]`: A comma-separated list of tags to search for.
    - `category=[string]`: The category to search for.
    - `price=[number]`: The price to search for.
    - `type=[string]`: The type to search for.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database

