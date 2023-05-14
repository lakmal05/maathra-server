// import mysql from 'mysql'
import mysql from "mysql2";

const pool = mysql.createPool({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB,
  // dateStrings: true,

  // ---------------------//

  host: "localhost",
  user: "root",
  password: "1234",
  database: "maathra",
  connectionLimit:10

});

// conn.connect(function(error){

//   if(error){
//     throw error;

//   }console.log("connet");

// } )


const db = pool.promise();

// export default db;

module.exports= pool;