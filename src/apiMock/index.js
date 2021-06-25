const { v4: uuidv4 } = require("uuid");

const INTERVAL = 1000;

let todos = [
  {
    id: '07ca0d3f-1977-4aeb-9258-fade51a38b5c',
    text: 'ir as compras',
    isComplete: false
  },
  {
    id: '07ca3f-1977-4aeb-9258-fade51a38b5c',
    text: 'fazer TPC',
    isComplete: true
  }
];

export const save = (text = "") =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (!text || text.includes("fail")) {
        rej({ statusCode: 500, message: "An error occurred" });
      } else {
        const todo = {
          id: uuidv4(),
          text,
          isComplete: false
        };
        todos = [...todos, todo];
        res({
          statusCode: 200,
          data: todo
        });
      }
    }, INTERVAL);
  });

  export const remove = (id) => new Promise((res, rej) => {
    setTimeout(() => {
      todos = todos.filter(todo => todo.id !== id);
      res({
        statusCode: 200,
      })
    }, INTERVAL);
  });

  export const get = () => new Promise((res, rej) => {
    setTimeout(() => {
      res({
        statusCode: 200,
        data: todos
      })
    }, INTERVAL);
  });
