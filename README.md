# E-commerce API with Express, TypeScript, and MongoDB

This project is an E-commerce API developed using Express with TypeScript, MongoDB with Mongoose for data management, and Joi/Zod for validation.

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    ```

## Running the Application

### Start the server:

```sh
npm run dev
