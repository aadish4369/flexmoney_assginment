

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

## Overview

The Yoga Classes Admission Form is a web application built to facilitate the enrollment process for monthly Yoga classes. Users can enroll, choose a batch, and make monthly payments.

## Features

- **Age Limit:** Users within the age range of 18-65 can enroll.
- **Monthly Payment:** Participants pay the fees on a month-to-month basis (500/- Rs INR per month).
- **Batch Selection:** Users can choose a batch from four available slots.
- **Batch Shifting:** Participants can move to any other batch in the following months.

## ER Diagram
![ER Diagram]([https://github.com/aadish4369/flexmoney_assginment/blob/main/image.png)




## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aadish4369/flexmoney_assginment.git
   cd flexmoney_assginment/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
3. Run Server:

   ```bash
   npm run dev
   ```
   

4. Change directory:

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

```bash

```

## Deployment

The application is deployed on AWS Beanstack.

## Directory Structure
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




## Built With

- Vite.js (Frontend)
- Express.js (Backend)
- MongoDB Atlas (Database)

## License

This project is licensed under the [MIT License](LICENSE).

---

Replace placeholder details such as the ER diagram link, Heroku app URL, and any other specific information related to your project. Additionally, add more sections or details as needed based on the actual structure and features of your project.
