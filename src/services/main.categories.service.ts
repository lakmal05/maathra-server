const pool = require("./db");

export const create = (data, callBack) => {
  pool.query(
    `INSERT INTO mainCategories (Categorietype,isFree)
             VALUES(?,?)`,

    [data.Categoriestype, data.isFree],

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
    `SELECT id,Categorietype,isFree from mainCategories `,
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
    `UPDATE mainCategories SET Categorietype=? ,isFree=?
        WHERE id = ? `[(data.Categorietype, data.isFree)],

    (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        return callBack(null, results[0]);
      }
    }
  );
};

export const deleteC = async (data, callBack) => {
  pool.query(
    `DELETE FROM mainCategories WHERE id = ?`,
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

export const getByMainCategorieId = async (id, callBack) => {
  pool.query(
    `SELECT id,Categorietype,isFree FROM mainCategories WHERE id = ?`,
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
