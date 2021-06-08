# Redux exercise 03

Now that we refactored the app to use redux, we need to persist the data to the database.

There's a mock api in `.src/apiMock` with some functions to save, remove and get data, we just need to implement these within our code.

In this exercise, we will build a logger to monitor our redux application, and learn how to use redux-thunk.

## Steps


1. Its possible to intercept and even manipulate data after the dispatch of an action. We do that through `middleware`.
In the `./src/store` folder, create a new folder called middleware.

2. In `./src/store/middleware`, create a `logger.js` file.

3. Add the following content to the file.

  ```js
  const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("The action: ", action);
    const returnValue = next(action);
    console.log("The new state: ", store.getState());
    console.log("");
    console.groupEnd();
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

9. Add some todos and check the console to see the new logs.