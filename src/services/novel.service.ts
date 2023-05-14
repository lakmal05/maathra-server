const pool = require("../database/db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO novels(author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title)
             VALUES(?,?,?,?,?,?,?)`,

    [
      data.author,
      data.dateAdded,
      data.imageUrl,
      data.imageUrlFront,
      data.introductoin,
      data.introductoin,
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
    `SELECT  novelID,author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title from novels `,
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
    `UPDATE novels SET author=? ,dateAdded=?,imageUrl=?,imageUrlFront=?,introductoin=?,lastModified=?,title =?
        WHERE novelID = ?`,
    [
      data.author,
      data.dateAdded,
      data.imageUrl,
      data.imageUrlFront,
      data.introductoin,
      data.lastModified,
      data.title,
      data.novelID
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

export const deleteN = async (data, callBack) => {
  pool.query(
    `DELETE FROM novels WHERE novelID = ?`,
    [data.novelID],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        return callBack(null, results[0]);
      }
    }
  );
};

export const getByNovelId = async (novelID, callBack) => {
  pool.query(
    // `SELECT novelID,author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title FROM novels WHERE novelID = ?`,
    `SELECT * FROM novels WHERE novelID = ? `,
    [novelID],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};
