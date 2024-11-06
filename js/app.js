// const form = document.querySelector("#form");
// const field = document.querySelector("#field");
// const button = document.querySelector("#button");
// const todoWrapper = document.querySelector("#todo-items");

// function validate(field) {
//     if (field.value.length < 4) {
//         alert("ToDo eng kamida 4ta harfdan iborat bo'lishi kerak");
//         field.focus();
//         return false;
//     }
//     return true;
// }

// function createCard(data) {
//     return `
//       <div class="todo-item">
//           <p>${data.name}</p>
//           <span data-id = ${data.id} class= "delete">Delete</span>
//         </div>
//     `;
// }

// function getDataFromLocalStorage() {
//     let data = [];
//     if (localStorage.getItem("todos")) {
//         data = JSON.parse(localStorage.getItem("todos"));
//     }
//     return data;
// }

// button &&
//     button.addEventListener("click", function(event) {
//         event.preventDefault();
//         const isValid = validate(field);
//         if (!isValid) {
//             return;
//         }
//         const todo = {
//             id: Date.now(),
//             name: field.value,
//         };
//         const card = createCard(todo);
//         todoWrapper.innerHTML += card;
//         form.reset();
//         let todos = getDataFromLocalStorage();
//         todos.push(todo);
//         localStorage.setItem("todos", JSON.stringify(todos));
//     });

// document.addEventListener("DOMContentLoaded", function() {
//     let todos = getDataFromLocalStorage();
//     todos.forEach((todo) => {
//         let card = createCard(todo);
//         todoWrapper.innerHTML += card;
//     });
//     let buttons = document.querySelectorAll(".delete");
//     buttons.length > 0 &&
//         buttons.forEach((btn) => {
//             btn &&
//                 btn.addEventListener("click", function() {
//                     let isDelete = confirm("Rostdan ham ochirmoqchimisiz?");
//                     if (isDelete) {
//                         this.parentNode.remove();
//                         let id = this.getAttribute("data-id");
//                         if (id) {
//                             todos = todos.filter((value) => {
//                                 return value.id != id;
//                             });
//                             localStorage.setItem("todos", JSON.stringify(todos));
//                         }
//                     }
//                 });
//         });
// });

const form = document.querySelector("#form");
const field = document.querySelector("#field");
const button = document.querySelector("#button");
const todoWrapper = document.querySelector("#todo-items");
const clear = document.querySelector("#clear");

function validate(field) {
  if (field.value.length < 4) {
    alert("ToDo eng kamida 4 ta belgidan iborat bolsin");
    field.focus();
    return false;
  }
  return true;
}

function createCard(data) {
  return `
     <div class="todo-item">
          <p>${data.name}</p>
          <span data-id = ${data.id} class = "delete">delete</span>
        </div>
    `;
}

function getDataFromLocalStorage() {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }

  return data;
}

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const isValid = validate(field);
    if (!isValid) {
      return;
    }

    const todo = {
      id: Date.now(),
      name: field.value,
    };

    const card = createCard(todo);
    let res = card + todoWrapper.innerHTML;
    todoWrapper.innerHTML = res;
    field.value = "";

    let todos = getDataFromLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

document.addEventListener("DOMContentLoaded", function () {
  let todos = getDataFromLocalStorage();

  todos.forEach((todo) => {
    let card = createCard(todo);
    todoWrapper.innerHTML += card;
  });

  let buttons = document.querySelectorAll(".delete");

  buttons.length > 0 &&
    buttons.forEach((btn) => {
      btn &&
        btn.addEventListener("click", function (event) {
          let isDelete = confirm("Rostan ham ochirmoqchimisiz ???");

          if (isDelete) {
            this.parentNode.remove();
            let id = this.getAttribute("data-id");
            if (id) {
              todos = todos.filter((value) => {
                return value.id != id;
              });

              localStorage.setItem("todos", JSON.stringify(todos));
            }
          }
        });
    });
});

clear &&
  clear.addEventListener("click", function (event) {
    event.preventDefault();
    let isClear = confirm("Rostdan ham hammasini o'chirmoqchimisiz");
    if (isClear) {
      todoWrapper.innerHTML = "";
      localStorage.removeItem("todos");
    }
  });
