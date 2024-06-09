
```markdown
# RESTful API Project with Node.js and JavaScript

This project is a RESTful API built using Node.js, Express, and Sequelize for database management.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine. You can download it from [Node.js official website](https://nodejs.org/).
- A package manager like npm or yarn.
- A database (MySQL, PostgreSQL, etc.) installed and running.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/soandrade6/technical-test-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd technical-test-api
   ```

3. **Install dependencies**:

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

**Access the API**:

   Once the server is running, you can access the API at `http://localhost:3000`.

### API Endpoints

Here are some of the main endpoints available in this project:

- `GET /accounts`: Retrieve all accounts.
- `POST /accounts`: Create a new account.
- `GET /movements/:account_number`: Retrieve movements for a specific account.
- `POST /movements`: Create a new movement.


