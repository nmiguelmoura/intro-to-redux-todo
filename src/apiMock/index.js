const { v4: uuidv4 } = require("uuid");

const INTERVAL = 1000;

let todos = [];

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

  export const get = () => new Promise((res, rej) => {
    setTimeout(() => {
      res({
        statusCode: 200,
        data: todos
      })
    }, INTERVAL);
  })
