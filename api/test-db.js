// api/test-db.js
import { Pool } from '@neondatabase/serverless';

export default async function handler(request, response) {
  // 1. Setup the connection using the secret Environment Variable
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // 2. Run a simple SQL query to ask the Database for the current time
    const { rows } = await pool.query('SELECT NOW()');
    
    // 3. Send the result back to the browser
    response.status(200).json({ 
      message: "Database Connected Successfully!", 
      time: rows[0].now 
    });
  } catch (error) {
    // 4. If it fails, tell us why
    response.status(500).json({ 
      error: "Database Connection Failed", 
      details: error.message 
    });
  }
}