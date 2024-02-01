"use strict";

const Todo = require("../../models/Todo");

const output = {
  home: (req, res) => {
    res.render("home/todo");
  },
  spit: async (req, res) => {
    const todo = new Todo();
    const result = await todo.list();
    return res.json(result);
  },
};

const process = {
  add: async (req, res) => {
    const should = new Todo(req.body);
    console.log(should);
    const response = await should.add();
    return res.json(response);
  },

  change: async (req, res) => {
    const todo = new Todo(req.body, req.params);
    console.log(todo);
    const result = await todo.change();
    return res.json(result);
  },

  kill: async (req, res) => {
    const todo = new Todo(req.params);
    // console.log(todo);
    const result = await todo.kill();
    return res.json(result);
  },

  check: async (req, res) => {
    const todo = new Todo(req.body);
    const result = await todo.check();
    return res.json(result);
  },
};

module.exports = {
  output,
  process,
};
