# Open Career Portal

This project provides a robust web-based platform for companies to host their own career pages, allowing users to browse job listings and apply directly from the website.

## Features

-   Job listing with search functionality
-   Individual job application pages
-   Responsive design

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

🔴<span style="color:red">Tools you **MUST HAVE** to run this app.</span>🔴 Install the software and how to install them:

-   [Node.js](https://nodejs.org/en/download/) - Node version v22.2.0 - **Not LTS**, but the latest version.
-   [Git](https://git-scm.com/downloads) - Version 2.42.1
-   [MongoDB](https://www.mongodb.com/try/download/community) - mongosh version 2.2.6
-   [NPM](https://www.npmjs.com/get-npm) - npm version 10.7.0
-   [MongoDB Cloud](https://www.mongodb.com/lp/cloud/atlas/) - MongoDB Atlas register for free
-   [Google Cloud Platform](https://console.cloud.google.com/) - Google Cloud Platform register for free

What things you need to install the software and how to install them:

```bash
git clone https://github.com/IvanoskiHarmonia/open-career-portal.git
cd open-career-portal
```

### Installing

A step by step series of examples that tell you how to get a development env running:

1. **Set up both the server and the client**

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

3. **Run the application**

In the root directory, run the following command:

```bash
npm run dev
```

## Running the tests

Currently, the tests that are on the project do not cover the entire codebase. To run the tests, you can use the following command:

In root directory:

```bash
npm run test:client
```

## Deployment

This project is not yet ready for deployment.

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

-   Hat tip to anyone whose code was used
