# Influencer Campaign Performance Tracker

A web application for tracking and summarizing influencer campaign performance, including posts, engagement, and total earnings. This project is built using **Next.js** and **Tailwind CSS**, offering an intuitive interface for displaying campaign metrics and summaries.

## Features
- View campaign performance summary (posts per day, engagement, earnings)
- Responsive design for mobile and desktop devices
- Easy-to-understand charts for visualizing campaign performance

## Prerequisites

Before getting started, ensure that you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (Node Package Manager) or **Yarn** (optional)

You can download Node.js from [here](https://nodejs.org/).

## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone https://github.com/your-username/influencer-campaign.git
  ```
  ### 2. Navigate to the Project Directory
  ```bash
  cd influencer-campaign
  ```
  ### 3. Install Dependencies
  ```bash
  npm install
  ```
  or
  ```bash
  yarn install  
  ```
  ### 4. Start the Development Server
  ```bash
  npm run dev
  ```
  or
  ```bash
  yarn dev
  ```
  ### 5. Set Up Environment Variables
  Create a .env.local file in the root directory of the project and configure it with the necessary environment variables. For example:
  ```bash
  NEXT_PUBLIC_API_URL=https://your-api-url.com
  MONGODB_URL=your-mongodb-url
  ```   
  ### 6. Seed the Database 
  If you want to seed the database with initial data (like campaign summaries, posts, and influencers), run the following command:
  ```bash
  npm run seed
  ```



This README contains all the necessary steps to set up the project, run it locally, and includes details about the project structure, available scripts, and customization instructions.

