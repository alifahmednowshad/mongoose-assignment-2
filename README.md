# E-commerce API with Express, TypeScript, MongoDB, and Mongoose

This project is an e-commerce API developed using Express and TypeScript, integrated with MongoDB using Mongoose for effective data management. Data integrity is ensured through validation using Joi.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
    - [Create a New Product](#create-a-new-product)
    - [Retrieve a List of All Products](#retrieve-a-list-of-all-products)
    - [Retrieve a Specific Product by ID](#retrieve-a-specific-product-by-id)
    - [Update Product Information](#update-product-information)
    - [Delete a Product](#delete-a-product)
    - [Search a Product](#search-a-product)
  - [Order Management](#order-management)
    - [Create a New Order](#create-a-new-order)
    - [Retrieve All Orders](#retrieve-all-orders)
    - [Retrieve Orders by User Email](#retrieve-orders-by-user-email)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Prerequisites

- Node.js (>= 14.x)
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/alifahmednowshad/mongoose-assignment-2.git
    cd ecommerce-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Setting up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
MONGODB_URI=your mongodb project uri set up here
