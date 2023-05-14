const pool = require("../database/db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO segments(articleID,body,bodyImage,imageUrl,imageUrlFront,title)
             VALUES(?,?,?,?,?,?)`,

    [
      data.articleID,
      data.body,
      data.bodyImage,
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
    `SELECT  segmentID,articleID,body,bodyImage,imageUrl,imageUrlFront,title from segments `,
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
    `UPDATE segments SET articleID=? ,body=?,bodyImage=?,imageUrl=?,imageUrlFront=?,title =?
        WHERE segmentID = ?`,
    [
        data.articleID,
        data.body,
        data.bodyImage,
        data.imageUrl,
        data.imageUrlFront,
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

export const deleteS = async (data, callBack) => {
  pool.query(
    `DELETE FROM segments WHERE segmnetID = ?`,
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

export const getBySegmentId = async (segmentID , callBack) => {
  pool.query(
    // `SELECT novelID,author,dateAdded,imageUrl,imageUrlFront,introductoin,lastModified,title FROM novels WHERE novelID = ?`,
    `SELECT * FROM segments WHERE segmnetID = ? `,
    [segmentID ],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        return callBack(null, results);
      }
    }
  );
};
