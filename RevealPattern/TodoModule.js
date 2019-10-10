"use strict"

var TodoModule = (function() {
  var todoList = [];
  todoList.push({'code' : '10', 'name' : 'Contestar correo residuos', 'status' : 'COMPLETED'});
  todoList.push({'code' : '20', 'name' : 'Imputar horas', 'status' : 'PENDING'});
  // var newTodo = {'code' : '30', 'name' : 'Explirar el patron revelador', 'status' : 'IN_COURSE'};

  // Public functions
  function searchTodos() {
    return todoList;
  };

  function addTodo(todo) {
    todoList.push(todo);
  };

  function deleteTodo(code) {
    var todoIndex = findIndexByCode(code);
    if (todoIndex === -1) {
      return -1;
    }
    var result = removeTodoByIndex(todoIndex);
    if ((result === 'undefined') || (result.length === 0)) {
      return -1;
    }
    return 0;
  };

  // Private functions
  function findIndexByCode(code) {
    return todoList.findIndex(function(todo) {
      return todo.code === code;
    });
  };

  function removeTodoByIndex(todoIndex) {
    return todoList.splice(todoIndex, 1);
  };

  return {
    searchTodos : searchTodos,
    addTodo : addTodo,
    deleteTodo : deleteTodo
  };
})();
