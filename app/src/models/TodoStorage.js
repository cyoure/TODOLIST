"use strict";

const db = require("../config/db");

class TodoStorage {
  static getListInfo() {
    return new Promise((resolve, reject) => {
      // const query = "SELECT is_check, description FROM lists;";
      const query = "SELECT * FROM lists;";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static save(listInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lists(description) VALUES(?);";
      db.query(query, [listInfo], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
  static change(id, description) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lists SET description = ? where id = ?;";
      const param = [description, id];
      db.query(query, param, (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
  static kill(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM lists where id = ?;";
      db.query(query, [id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
  static check(id, isCheck) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lists SET is_check = ? where id = ?;";
      db.query(query, [isCheck, id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = TodoStorage;
