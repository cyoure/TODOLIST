"use strict";

const TodoStorage = require("./TodoStorage");

class Todo {
  constructor(req) {
    this.body = req;
    this.params = req.params;
   }
  async list() {
    try {
      const response = await TodoStorage.getListInfo()
      return response;
    } catch (err) {
      return { msg: err };
    }
  }
  async add() {
    const should = this.body;
    console.log(should);
    try {
      if (should.length) {
        const response = await TodoStorage.save(should);
        return response;
      }
      return { success: false, msg: "할 일을 입력해주세요" };
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async change() {
    const description = this.body;
    const toDoId = this.params;
    console.log(description, toDoId);
    try {
      if (description.length) {
        const response = await TodoStorage.change(toDoId, description);
        return response;
      }
      return { success: false, msg: "할 일을 입력해주세요" };
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async kill() {
    const toDoId = this.params;
    console.log(toDoId)
    try {
      const response = await TodoStorage.kill(toDoId);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async check() {
    const id = this.body.id;
    const isCheck = this.body.isCheck;
    try {
      const response = await TodoStorage.check(id, isCheck);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = Todo;
