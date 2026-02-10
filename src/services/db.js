// src/services/db.js
import { Pool } from '@neondatabase/serverless';

// This function creates a connection to your DB
const getDbConnection = () => {
  return new Pool({
    connectionString: process.env.DATABASE_URL, 
  });
};

export default getDbConnection;