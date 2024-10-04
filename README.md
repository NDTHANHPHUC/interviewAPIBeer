# Beer API

This is a simple Beer API built with Express and Sequelize, using SQLite as the database.

## Project Structure
interview/ beer-api/ database.sqlite folder/ package.json src/ index.ts models/ Beer.ts seed.ts sequelize.ts tsconfig.json README.md

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/NDTHANHPHUC/interviewAPIBeer.git
   cd interview/beer-api

2. Install the dependencies:

npm install

Database Setup
Seed the database with initial data:

npx ts-node src/seed.ts

Running the Server
1. Start the server:

npx ts-node src/index.ts

2. The server will be running at http://localhost:3000.

Example request to test API:
GET http://localhost:3000/beers?page=2&limit=5

Response:
{
  "data": [
    {
      "id": 1,
      "price": "$16.99",
      "name": "Founders All Day IPA",
      "rating": {
        "average": 4.411243509154233,
        "reviews": 453
      },
      "image": "https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png",
      "createdAt": "2023-10-01T00:00:00.000Z",
      "updatedAt": "2023-10-01T00:00:00.000Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 1
}

Project Files
src/index.ts: Entry point of the application.
src/models/Beer.ts: Beer model definition.
src/seed.ts: Script to seed the database with initial data.
src/sequelize.ts: Sequelize instance configuration.