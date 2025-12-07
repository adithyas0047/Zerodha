# Zerodha – Full Stack Trading Dashboard Clone

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white) ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white) ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

A full-stack Zerodha trading dashboard clone built using modern web technologies. This project replicates core features of portfolio tracking such as holdings, positions, orders, charts, and real-time-like UI updates.

## Tech Stack

**Frontend**

- React.js
- Bootstrap
- Material UI
- Chart.js

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB

## Features

**Dashboard**

- View complete portfolio in a clean UI
- Equity summary, current value, investment value
- Holdings table with P&L, day change, average price, quantity, etc.
- Positions page
- Order placement (demo)

**Backend API**

- Restful API for:
  - Retrieving holdings (`/allHoldings`)
  - Retrieving positions (`/allPositions`)
  - Creating new orders (`/newOrder`)

**Data Visualization**

- Chart.js line, bar, and doughnut charts for analyzing portfolio performance.

**Responsive UI**

- Fully responsive and styled using Bootstrap + Material UI
- Inspired by Zerodha’s minimalistic design principles

## Project Structure

```pgsql
Zerodha/
│── backend/
│   ├── model/
│   ├── schemas/
│   ├── index.js
│   ├── package.json
│── dashboard/ (React.js)
│   ├── src/
│   ├── public/
│── frontend/ (Landing Page + Main UI)
│   ├── src/
│   ├── public/
│── package.json
```

## Installation & Setup

**Clone the repository**

```bash
git clone https://github.com/your-username/zerodha.git
cd zerodha
```

**Backend Setup (Node + Express)**

```bash
cd backend
npm install
```

Create a `.env` file:

```bash
MONGO_URL=your_mongodb_atlas_url
PORT=4000
```

Start the server

```bash
npm start
```

## Frontend Setup (React + MUI + Bootstrap)

**Frontend landing page**

```bash
cd frontend
npm install
npm start
```

**Dashboard (Trading UI App)**

```bash
cd dashboard
npm install
npm start
```

## API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/allHoldings`  | Get all holdings     |
| GET    | `/allPositions` | Get all positions    |
| POST   | `/newOrder`     | Add a new demo order |

## Additional Libraries Used

**Chart.js**
Used for creating interactive and responsive charts in the dashboard.

## Deployment

- Backend deployed on: Render
- Frontend & Dashboard deployed on: Vercel
- Database hosted on MongoDB Atlas

## Screenshots

**Landing Page**

![Landing Page](image1.png)

**Trading UI App (Dashboard)**

![Dashboard](image.png)

## Contributing

Contributions are welcome!
Fork this repo and submit a PR with improvements or new features.
