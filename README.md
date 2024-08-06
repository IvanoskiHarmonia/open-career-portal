# Open Career Portal

This project provides a robust web-based platform for companies to host their own career pages, allowing users to browse job listings and apply directly from the website.

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Prerequisites](#prerequisites)
-   [Installing](#installing)
    -   [Set up both the server and the client](#set-up-both-the-server-and-the-client)
    -   [Running the tests](#running-the-tests)
-   [Deployment](#deployment)
-   [Built With](#built-with)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Features

-   Job listing with search functionality
-   Individual job application pages
-   User authentication (Google OAuth, Guest)
-   Submitted Applications page
-   Responsive design for mobile and desktop
-   (RBAC) - Role-based access control (Admin, User, Guest)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

🔴<span style="color:red">Tools you **MUST HAVE** to run this app.</span>🔴 Install the software and how to install them:

-   [Node.js](https://nodejs.org/en/download/) - Node version v22.2.0 - **LTS**.
-   [Git](https://git-scm.com/downloads) - Version 2.42.1
-   [NPM](https://www.npmjs.com/get-npm) - npm version 10.7.0
-   [MongoDB](https://www.mongodb.com/try/download/community) - mongosh version 2.2.6 - [Local installtaion](docs/INSTALL_LOCAL_MONGO.md)
-   [MongoDB Cloud](https://www.mongodb.com/lp/cloud/atlas/) - MongoDB Atlas register for free account - **Optional**

What things you need to install the software and how to install them:

```bash
git clone https://github.com/IvanoskiHarmonia/open-career-portal.git
cd open-career-portal
```

### Installing

A step by step series of examples that tell you how to get a development env running:

#### **Set up both the server and the client**

In the `root` directory, install dependencies for both the server and the client:

All at once:

```bash
npm run install:all
```

Or separately:

```bash
npm install
npm run install:client
npm run install:server
```

#### Set up local MongoDB

[Local installtaion](docs/INSTALL_LOCAL_MONGO.md)

### **Run the application**

For testing production and development in general there's 3 ways to start the application:

Production:

```bash
npm run prod
```

User development:

```bash
npm run dev:user
```

Admin development:

```bash
npm run dev:admin
```

### Running the tests

Currently, the tests that are on the project do not cover the entire codebase. To run the tests, you can use the following command:

In root directory:

```bash
npm run test:client
```

## Deployment

This project is currently deployed on Heroku. The deployment process is done by Project Maintainers.

## Built With

-   [React.js](https://reactjs.org/) - The web framework used
-   [Node.js](https://nodejs.org/) - Server Environment
-   [Express.js](https://expressjs.com/) - Web framework for Node.js
-   [MongoDB](https://www.mongodb.com/) - Database

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

-   Starring this repository means a lot to us!
