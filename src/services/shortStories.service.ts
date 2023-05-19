const pool = require("./db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO shortStories (author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title)
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
    `SELECT id,author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title from shortStories `,
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
    `UPDATE shortStories SET author=? ,dateAdded=?,imageUrl=?,imageUrlFront=?,introductoin=?,lastModified=?,title =?
        WHERE id = ? `[
      (data.author,
      data.dateAdded,
      data.imageUrl,
      data.imageUrlFront,
      data.introductoin,
      data.lastModified,
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

export const deleteS = async (data, callBack) => {
  pool.query(
    `DELETE FROM shortStories WHERE id = ?`,
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

export const getByshortStorielId = async (id, callBack) => {
  pool.query(
    `SELECT id,author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title from shortStories where id = ?`,
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
