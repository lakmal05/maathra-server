const pool = require("../database/db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO users (userName,mobileNumber) VALUES(?,?)`,
    [data.userName, data.mobileNumber],

    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};

export const getAll = ( callBack) => {
  pool.query(
    `SELECT  userID , userName,mobileNumber From users `,
    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};
