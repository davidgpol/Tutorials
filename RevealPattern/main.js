"use strict"

var todoTableBody = document.getElementById('todoTbody');

initTable();

function initCells(row, todo) {
    var cell = null;
    var cellNumbers = Object.keys(todo).length;
    for(var cellNumber = 0; cellNumber < cellNumbers; cellNumber++) {
        cell = row.insertCell(cellNumber);
        cell.innerHTML = Object.values(todo)[cellNumber];
    }
}

function initTable() {
  var todosList = TodoModule.searchTodos();

  var row = null;
  todosList.forEach(function(todo, index) {
      row = todoTableBody.insertRow(index);
      initCells(row, todo);
  });
}

function addTodo() {
  var newTodo = {'code' : '30', 'name' : 'Explirar el patron revelador', 'status' : 'IN_COURSE'};
  TodoModule.addTodo(newTodo);
  todoTableBody.innerHTML = "";
  initTable();
}
