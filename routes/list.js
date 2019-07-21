const express = require("express")

const router = express.Router();

const assert = require('../public/js/asserts')

const util = require('../middleware/util');


var todolist = [];

router.get('/TodoList', (req, res) => {
    res.render("List", {
        "todo": todolist
    })
});

router.post('/add', (req, res) => {
    util.insertTodo(req.body.todo)
    todolist = util.getTodo();
    res.redirect('/list/TodoList');
})

router.get('/reset', (req, res) => {
    util.resetTodo();
    res.redirect('/list/TodoList');
})

router.post('/delete', (req, res) => {
    util.deleteTodo(req.body.delIndex);
    res.redirect('/list/TodoList');
})

module.exports = router;