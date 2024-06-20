# Setting Up MongoDB for Local Development

This guide explains how to install MongoDB, set it up, and run it locally for your development environment.

## Prerequisites

-   **macOS**: Homebrew installed
-   **Windows**: Chocolatey or download from MongoDB website
-   **Linux**: Package manager (apt, yum, etc.)

## Installation

### macOS

1. **Install MongoDB using Homebrew**

    Open your terminal and run the following commands to install MongoDB:

    ```bash
    brew tap mongodb/brew
    brew install mongodb-community
    brew install mongosh
    ```

2. **Verify the Installation**

    Check if MongoDB has been installed correctly:

    ```bash
    mongod --version
    ```

### Windows

1. **Install MongoDB using Chocolatey**

    Open PowerShell as Administrator and run the following command:

    ```bash
    choco install mongodb
    ```

    Alternatively, you can download MongoDB from the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and follow the installation instructions.

2. **Verify the Installation**

    Check if MongoDB has been installed correctly:

    ```bash
    mongod --version
    ```

### Linux

1. **Install MongoDB on Ubuntu**

    Follow these commands to install MongoDB on Ubuntu:

    ```bash
    sudo apt update
    sudo apt install -y mongodb
    ```

2. **Start MongoDB**

    Start the MongoDB service:

    ```bash
    sudo systemctl start mongodb
    ```

3. **Verify the Installation**

    Check if MongoDB has been installed and is running:

    ```bash
    mongod --version
    ```

## Setup

1. **Create Data Directory**

    MongoDB requires a data directory to store its data. Create this directory in your home directory:

    ```bash
    mkdir -p ~/data/db
    ```

2. **Set Permissions**

    Ensure that you have the necessary permissions for the data directory:

    ```bash
    sudo chown -R `id -un` ~/data/db
    ```

3. **Create a Configuration File**

    Create a MongoDB configuration file (e.g., `mongodb.conf`) in your home directory with the following content:

    ```
    storage:
      dbPath: /Users/your_username/data/db
    net:
      bindIp: 127.0.0.1
      port: 27017
    ```

    Replace `your_username` with your actual username.

## Running MongoDB Locally

1. **Start MongoDB**

    Start the MongoDB server using the configuration file:

    ```bash
    mongod --config ~/mongodb.conf
    ```

2. **Verify MongoDB is Running**

    Open another terminal window and start the MongoDB shell:

    ```bash
    mongosh
    ```

    You should see the MongoDB shell prompt (`>`).

## Importing Data into MongoDB

To import your jobs data into MongoDB for testing, follow these steps:

1. **Save Your Data to a JSON File**

    Save your job data to a file named `jobs.json`. Ensure the file is properly formatted as a JSON array.

    ```json
    [
      {
        "_id": { "$oid": "667444b7c7529daf4422f3c8" },
        "id": { "$numberInt": "3" },
        "title": "Data Scientist",
        "company": "Data Wizards Corp",
        "description": "We are hiring a Data Scientist to help us extract insights from large datasets...",
        "date_created": "2024-05-20T09:00:00Z",
        "date_updated": "2024-05-20T09:00:00Z",
        "location": "San Francisco, CA, USA",
        "type": "Full-time",
        "salary": "95,000 - 120,000 USD",
        "requirements": ["Master's degree in Data Science, Statistics, or related field", "3+ years of experience in data analysis", "Proficiency in Python, R, and SQL"],
        "responsibilities": ["Analyze large datasets to extract actionable insights", "Develop predictive models", "Collaborate with cross-functional teams"],
        "benefits": ["Health insurance", "Stock options", "Gym membership"],
        "application_deadline": "2024-08-01T23:59:59Z",
        "contact_information": { "email": "jobs@datawizards.com", "phone": "456-789-1230" },
        "job_category": "Data Science",
        "experience_level": "Mid-level",
        "education": "Master's degree",
        "company_logo": "https://example.com/logos/data_wizards_logo.png",
        "remote": true,
        "how_to_apply": "Send your resume to jobs@datawizards.com"
      }
      // Add more job objects as needed
    ]
    ```

    Or download this more comprehensive file:

    [jobs.json](https://github.com/IvanoskiHarmonia/open-career-portal/blob/4c1a6863442edbc00696901aec1b5a8ac2d4ecf0/server/data/jobs.json)

2. **Import the Data**

    Use the `mongoimport` tool to import the data into your MongoDB database:

    ```
    mongoimport --db testDB --collection jobs --file path/to/jobs.json --jsonArray
    ```

    Replace `path/to/jobs.json` with the actual path to your `jobs.json` file.

3. **Verify the Import**

    Open the MongoDB shell:

    ```
    mongosh
    ```

    Switch to your database and check the imported data:

    ```bash
    use testDB
    db.jobs.find().pretty()
    ```

## Environment Configuration

To configure your application to use different MongoDB instances for development and production, use environment variables.

1. **Create a `.env` File**

    Create a `.env` file in the root of your project with the following content:

    ```
    MONGODB_LOCAL_URI=mongodb://localhost:27017/testDB
    ```

By following these steps, you can set up MongoDB for local development, import data for testing, and configure your application to use different MongoDB instances for development and production.
