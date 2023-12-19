# Yoga Classes Admission Form

This project is a simple admission form for monthly Yoga classes, allowing users to enroll, choose batches, and make monthly payments.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [ER Diagram](#er-diagram)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Directory Structure](#directory-structure)
- [Built With](#built-with)
- [License](#license)
- [Cloud Architecture](#cloud-architecture)

## Overview

The Yoga Classes Admission Form is a web application built to facilitate the enrollment process for monthly Yoga classes. Users can enroll, choose a batch, and make monthly payments.

## Features

- **Age Limit:** Users within the age range of 18-65 can enroll.
- **Monthly Payment:** Participants pay the fees on a month-to-month basis (500/- Rs INR per month).
- **Batch Selection:** Users can choose a batch from four available slots.
- **Batch Shifting:** Participants can move to any other batch in the following months.

## ER Diagram
![ER Diagram](https://github.com/aadish4369/flexmoney_assginment/blob/main/image.png)

# Yoga Classes Admission Database ER Diagram

This MongoDB database is designed to manage yoga class enrollments, user information, payments, and batch details. The ER diagram illustrates the relationships between different collections within the database.

## Collections

### Users Collection

- Each document in the `users` collection represents a user.
- Fields:
  - userID: Unique identifier for the user.
  - name: Name of the user.
  - age: Age of the user.
  
### Enrollments Collection

- Each document in the `enrollments` collection represents an enrollment.
- Fields:
  - enrollmentID: Unique identifier for the enrollment.
  - userID: References the `users` collection, linking the enrollment to a specific user.
  - batchID: References the `batches` collection, indicating the batch the user is enrolled in.
  - enrollmentDate:** Date when the enrollment was made.
  - status: Current status of the enrollment (Active/Inactive).

### Batches Collection

- Each document in the `batches` collection represents a batch.
- Fields:
  - batchID: Unique identifier for the batch.
  - startTime: Time when the batch starts.
  - endTime: Time when the batch ends.

### Payments Collection

- Each document in the `payments` collection represents a payment.
- Fields:
  - paymentID: Unique identifier for the payment.
  - userID: References the `users` collection, associating the payment with a specific user.
  - amount: The amount of the payment.
  - paymentDate: Date when the payment was made.

## Relationships

- The `enrollments` collection is linked to the `users` collection through the `userID` field, creating a relationship between users and their enrollments.
- The `enrollments` collection is linked to the `batches` collection through the `batchID` field, representing the batch a user is enrolled in.
- The `payments` collection is linked to the `users` collection through the `userID` field, establishing a relationship between users and their payments.


## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aadish4369/flexmoney_assginment.git
   cd flexmoney_assginment/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run Server:**

   ```bash
   npm run dev
   ```

4. **Change directory and Install backend dependencies:**

   ```bash
   cd ..
   cd ./backend
   npm i
   nodemon server.js
   ```

## Configuration

Adjust environment variables, database configurations, and any other settings as needed.

## Usage

Start the application and visit [http://localhost:5706](http://localhost:5706) in your browser.

## Deployment

The application is deployed on AWS Beanstalk.

## Directory Structure

```plaintext
flexmoney_assignment/
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- views/
|   |   |-- assets/
|   |   |-- ...
|   |-- public/
|   |-- package.json
|   |-- vite.config.js
|   |-- README.md
|-- backend/
|   |-- routes/
|   |-- models/
|   |-- server.js
|   |-- package.json
|   |-- README.md
|-- docker-compose.yml
|-- .gitignore
|-- README.md
```

# Docker Containerization 

This project utilizes Docker containerization to package and distribute the FlexMoney Assignment components: the frontend built with Vite, the backend powered by Express.js, and the MongoDB database hosted on MongoDB Atlas. Below is an overview of the Docker images available on Docker Hub and instructions for using Docker Compose to orchestrate the deployment of the entire system.

## Docker Images on Docker Hub

### Backend (Express.js):

Pull the backend image from Docker Hub:

```bash
docker pull aadish9304/flexmoney_docker_containers:flexmoney-backend
```

This image contains the Express.js application for the backend of the Yoga Class Management System.

### Frontend (Vite):

Pull the frontend image from Docker Hub:

```bash
docker pull aadish9304/flexmoney_docker_containers:flexmoney-frontend
```

This image includes the Vite setup for the frontend, serving static assets and handling dynamic content.

## MongoDB Atlas

The MongoDB database is hosted on MongoDB Atlas. Ensuring that MongoDB Atlas connection details are correctly configured in the backend application for seamless communication with the database.

## Docker Compose

To deploy the entire system using Docker Compose, create a `docker-compose.yml` file with the following content:

```yaml
version: '3'

services:
  frontend:
    image: aadish9304/flexmoney_docker_containers:flexmoney-frontend
    ports:
      - "80:80"

  backend:
    image: aadish9304/flexmoney_docker_containers:flexmoney-backend
    ports:
      - "3000:3000"

# Add environment variables or other configurations as needed
```

Save the `docker-compose.yml` file in the root directory of your project. To start the system, run:

```bash
docker-compose up -d
```

This command will create and start the containers in detached mode. Access the frontend at `http://localhost` and the backend at `http://localhost:3000`.

To stop the system, run:

```bash
docker-compose down
```

Ensure you have Docker and Docker Compose installed on your machine before running these commands.

## Important Note

Make sure to secure your MongoDB Atlas connection information and any sensitive data using environment variables or other secure methods, especially in production environments. Update the Docker Compose file and application configurations accordingly for proper integration.



 ## Design Cloud Architecture:
 Financial Considerations: While considering services like AWS Elastic Beanstalk, CDN, and a VPC provides a robust and scalable solution, it's acknowledged that these 
           services may come with associated costs. To address financial considerations, the decision was made to containerize the application, providing an alternative and 
           cost-effective deployment strategy.
- Backend: Deployed on Elastic Beanstalk with auto-scaling enabled.The backend of the Yoga Class Management System is deployed on Elastic Beanstalk, utilizing AWS's     
           scalable platform-as-a-service (PaaS) offering. Elastic Beanstalk simplifies the deployment and management of applications, allowing for easy scaling based on 
           demand. Auto-scaling is enabled, ensuring the system automatically adjusts resources to handle varying workloads efficiently.
- Database: The database is hosted on MongoDB Atlas, a fully-managed cloud database service. MongoDB Atlas provides a reliable and scalable platform for storing and 
            managing data. It offers features such as automated backups, monitoring, and the ability to scale horizontally as the data volume grows. The use of MongoDB 
            Atlas ensures robustness, security, and ease of management for the Yoga Class Management System.
- Frontend: Static files for the frontend are served using a Content Delivery Network (CDN) or hosted on a service like AWS S3. Leveraging a CDN ensures fast and reliable 
            content delivery to users worldwide by caching static assets at multiple global locations. Alternatively, hosting on AWS S3 provides a secure and scalable 
            solution for storing and serving static web content, complementing the dynamic backend deployed on Elastic Beanstalk.
- Networking: The system is configured within a Virtual Private Cloud (VPC), offering a private and isolated network environment within the AWS cloud. Security groups are 
              employed to control inbound and outbound traffic to instances within the VPC, ensuring a secure architecture. A load balancer is utilized to distribute 
              incoming traffic across multiple instances of the backend application, enhancing reliability, availability, and fault tolerance.



## Cloud Architecture

Create a diagram to visualize the architecture. Here's a textual representation:

```
Client <---> Load Balancer <---> Elastic Beanstalk (Backend)
                                ^
                                |
                                V
                             MongoDB Atlas (Database)
                                ^
                                |
                                V
                             AWS S3/CDN (Frontend)
```
Architecture Flow:
Client Interaction: Users interact with the system through the frontend, either hosted on AWS S3 or delivered through a CDN.

Load Balancer: Incoming requests are directed to the backend instances running on Elastic Beanstalk through a load balancer. The load balancer distributes traffic evenly to ensure optimal resource usage and fault tolerance.

Elastic Beanstalk (Backend): The dynamic backend processes user requests, manages application logic, and interacts with the database as needed. Auto-scaling ensures the system adapts to varying workloads.

MongoDB Atlas (Database): The database, hosted on MongoDB Atlas, stores and manages data related to yoga class enrollments, users, and payments.

This architecture provides a scalable, secure, and performant solution for managing yoga classes. It leverages the strengths of AWS services, including Elastic Beanstalk, S3, and MongoDB Atlas, to create a robust and flexible system that can handle varying workloads while ensuring a seamless user experience.

(This repository contains the source code for the Yoga Class Management System, which has been containerized for ease of deployment. Due to cost considerations, the solution is not hosted on external platforms, but you can retrieve and execute it locally or on your preferred infrastructure.)

## Built With

- [Vite.js](https://vitejs.dev/) (Frontend)
- [Express.js](https://expressjs.com/) (Backend)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Database)

## License

This project is licensed under the [MIT License](LICENSE).
