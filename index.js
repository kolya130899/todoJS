(function() {
  let myDate = document.querySelector(".date");
  setInterval(() => {
    myDate.innerHTML = new Date();
  }, 1000);
})();

let todos = [
  {
    priority: "High",
    text: "Interview",
    isDone: true
  },
  {
    priority: "Normal",
    text: "University",
    isDone: false
  },
  {
    priority: "Low",
    text: "Go for a walk",
    isDone: false
  }
];

const prior = level => {
  switch (level) {
    case "High":
      return "!!!";
    case "Normal":
      return "!!";
    case "Low":
      return "!";
    default:
      console.log("something went wrong");
  }
};

const todosList = document.querySelector(".todos");
/**
 * CREATING NEW TODO ELEMENT
 */
const printTodos = todos => {
  let todo = document.createElement("div");
  todo.setAttribute("class", "todo");

  todo.innerHTML = `
    <p class="todo__priority">${prior(todos.priority)}</p> 
    <p class="todo__text">${todos.text}</p> 
    <p> <input type="checkbox" ${todos.isDone ? "checked" : ""}> </p>  `;

  todosList.append(todo);
  console.log("I have already printed");
};

/**
 * PRINT ALL TODOS
 */
todos.map(printTodos);

/**
 * ADD AND PRINT NEW TODO
 */

const todosAddBtn = document.querySelector(".add-todos__btn");
const todosPriority = document.querySelector(".add-todos__priority");
const todosAddInput = document.querySelector(".add-todos__input");

const addTodos = (priority, text) => {
  let newTodo = { priority, text, isDone: false };
  todos.push(newTodo);

  printTodos(newTodo);
};

todosAddBtn.addEventListener("click", () => {
  addTodos(todosPriority.value, todosAddInput.value);
});

// class Todos {
//   constructor(priority, text, isDone) {
//     this.priority = priority;
//     this.text = text;
//     this.isDone = isDone;
//   }
//   filter() {}
//   delete() {}
//   add() {}
// }

// let todo = new Todos();
