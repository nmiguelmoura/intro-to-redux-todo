# Redux exercise 03

Now that we refactored the app to use redux, we need to persist the data to the database.

There's a mock api in `.src/apiMock` with some functions to save, remove and get data, we just need to implement these within our code.

In this exercise, we will build a logger to monitor our redux application, and learn how to use redux-thunk.

## The Logger

1. Its possible to intercept and even manipulate data after the dispatch of an action. We do that through `middleware`.
In the `./src/store` folder, create a new folder called middleware.

2. In `./src/store/middleware`, create a `logger.js` file.

3. Add the following content to the file.

  ```js
  const logger = (store) => (next) => (action) => {
    // CODE TO BE EXECUTED BEFORE THE STATE CHANGES
    const returnValue = next(action);
    // CODE TO BE EXECUTED AFTER THE STATE CHANGES
    return returnValue;
  };

  export default logger;
  ```

4. Create a new file in `./src/store/middleware` called `index.js`.

5. On this new file, import `applyMiddleware` from `redux` package.

6. `applyMiddleware` is a function whose arguments are the middlewares we want to use.
In this case, we want to use the logger, so:

  ```js
  applyMiddleware(
    logger
  )
  ```

7. Export the result of that applyMiddleware function call:

  ```js
  export defaul applyMiddleware(
    logger
  )
  ```

8. Now on `./src/index.js`, pass the middleware as argument to the createStore function:
  
  ```js
  const store = createStore(
    todos,
    [],
    middleware
  );
  ```

9. On the logger middleware, log:

- the action type
- the state before being updated (TIP: you can get the entire state from the store with `store.getState()`)
- the state after being updated


## Thunks

1. In `./src/actions/index` create a function called `handleAddTodo`. This function will hold the logic to save the todo on the server:

  ```js
  export const handleAddTodo = (todo) => {
    return (dispatch) => {
      // ADD CODE HERE
    };
  };
  ```

2. In your `./src/components/AddTodo.js`, call `handleAddTodo` action instad of `addTodo`.

3. Experiment on the browser. You should see an error when you try to add a new TODO.

4. To fix this, create a new middleware called `thunk`.

5. This new middleware should check if action is a function.

6. If its a function, it should return that function execution.

## Challenges

1. Implement the delete the same way.

2. Implement the status toggle the same way.

3. Implement getting all todos from DB when the app initializes.

4. Implement a UI optimistic approach on changing the status of a TODO.
