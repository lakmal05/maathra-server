const pool = require("./db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO poems (author,body,dateAdded,imageUrl,imageUrlFront,title)
             VALUES(?,?,?,?,?,?)`,

    [
      data.author,
      data.body,
      data.dateAdded,
      data.imageUrl,
      data.imageUrlFront,
      data.title,
    ],

    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};

export const getAll = (callBack) => {
  pool.query(
    `SELECT id,author,body,dateAdded,imageUrl,imageUrlFront,title from poems `,
    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};

export const update = async (data, callBack) => {
  pool.query(
    `UPDATE poems SET author=?,body=? ,dateAdded=?,imageUrl=?,imageUrlFront=?,title =?
        WHERE id = ? `[
      (data.author,
        data.body,
      data.dateAdded,
      data.imageUrl,
      data.imageUrlFront,
      data.title)
    ],

    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results[0]);
      }
    }
  );
};

export const deleteP = async (data, callBack) => {
  pool.query(
    `DELETE FROM poems WHERE id = ?`,
    [data.id],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        return callBack(null, results[0]);
      }
    }
  );
};

export const getByPoemId = async (id, callBack) => {
  pool.query(
    `SELECT id,author,body,dateAdded,imageUrl,imageUrlFront,title FROM poems WHERE id = ?`,
    [],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};
