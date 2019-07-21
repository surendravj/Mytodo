var todoList = [];
module.exports = {
    insertTodo: (todo) => {
        if (todo != null && todo != "") {
            todoList.push(todo);
        }
    },
    getTodo: () => {
        return todoList;
    },
    resetTodo: () => {
        todoList.length = 0;
    },
    deleteTodo: (index) => {
        todoList.splice(index, 1);
    }
}