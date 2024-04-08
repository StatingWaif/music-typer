# PERN application for learning touch typing

## This application utilizes the Genius API and parses rustih.ru for texts. Stack: Next.js, React, Tailwind, Express.js, PostgreSQL.

It utilizes several technologies including React, Tailwind CSS, and Express.js for both frontend and backend development, along with PostgreSQL for the database.

**Deployed application (clickable):** [![Application Deployment](https://i.imgur.com/ML1EyfD.png)](https://music-typer.vercel.app/)

## Local Setup Instructions:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/StatingWaif/music-typer.git
   ```

2. **Client setup:**

   ```bash
   cd client
   npm install
   ```

3. **Server setup:**

   ```bash
   cd server
   npm install
   ```

4. **Start PostgreSQL server**

5. **Set local environment variables**

   - **Client .env:**

     - `GENIUS_TOKEN` = Get from [Genius API Documentation](https://docs.genius.com/)
     - `GOOGLE_CSE_TOKEN` = Get from [Google Programmable Search Control Panel](https://programmablesearchengine.google.com/controlpanel/create) searchable url = \*.rustih.ru/\*
     - `GOOGLE_CX` = Get from [Google Programmable Search Control Panel](https://programmablesearchengine.google.com/controlpanel/create)
     - `NEXT_PUBLIC_API_URL` = "http://localhost:7000/"

   - **Server .env:**
     - `PORT` = 7000
     - `DB_NAME` = music-typer
     - `DB_USER` = postgres
     - `DB_PASSWORD` = 123
     - `DB_HOST` = localhost
     - `DB_PORT` = 5432
     - `SECRET_KEY` = secretjwtkey
     - `NODE_ENV` = dev
