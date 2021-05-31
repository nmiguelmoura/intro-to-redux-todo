# Redux exercise 01

## Steps to apply redux

1. Install redux and react-redux packages

```bash
  yarn add redux react-redux
```

2. Inside `src`, create a folder called `store`. Inside the `store` folder create 2 new folders: `actions` and `reducers`

3. Inside the `actions` folder create a new file called `index.js`. This file will hold the actions that your app wants to perform when an update to the store is needed.

4. In `src/store/actions/index.js` file create an action for increment the count, and another to decrement the count. An example of actions to increment or decrement the count would be:

```js
  export const incrementCount = () => ({
    type: "count/increment"
  });
```

This is just an object referring the type of action you want to perform. In this case, the type is `count/increment`. You could also pass some data inside the object, but we don't need that in this case.

5. Inside the reducer folder create a new file called `index.js`. This is where we are going to perform the updates to the store.

6. In `src/store/reducers/index.js` file create the reducer. Reducers receive the actions issued by our app, so we follow a pattern like the example bellow:

```js
export const count = (state = 0, action) => {
  switch (action.type) {
    case "count/increment":
      return state + 1;

    case ... :

    default:
      return state;
  }
};
```

Copy the code above to your file and complete with the remaining cases.

7. Now that the structure of our store is ready, we can use it in our app. For that we need to create a store and allow the components of our app to access it. Open the file `src/index.js`.

8. Create a store using the createStore method that you can import from `redux`package. To create a store you need to provide the reducer as the first argument, and an optional initial state as the second argument:

```js
  import { count } from "./store/reducers";
  ...
  const store = createStore(count);
```

9. Wrap the `App` component inside a `Provider` component. You can import the Provider from `react-redux` package. Include the store you created on step 8 as prop:

```jsx
  ...
  <Provider store={store}>
    <App />
  </Provider>
```

10. Open the `DisplayCount` component file. You can access the values in the store using a hook provided by `react-redux` called `useSelector`:

```js
  const DisplayCount = () => {
    const count = useSelector(state => state);
    ...
```

11. To make sure that our component has access to the value in the store, try to provide an initial state value to initialize the store and you'll see the app changing. For example:

```js
  const store = createStore(count, 10);
```

12. Now we just need to make sure that the buttons for increment / decrement work. For that we'll open the `Buttons` component file and use a hook called `useDispatch` provided by the `react-redux` package. We will also use the actions that we build on set 4.

```js
  import { useDispatch } from "react-redux";
  import * as actions from '../store/actions';
```

13. To increment the count we can create a function inside the component similar to this one:

```js
  const increment = () => {
    dispatch(actions.incrementCount());
  }
```

14. And we can call this function whenever the user clicks the increment button:

```jsx
  <button onClick={increment}>+</button>
```

## Challenges:

1. Make the decrement count button work.

16. Create a reset button that when pressed reverts the count to 0. Tip: Create a new action for that.

17. Limit the count value so we never get a number below 0 when we decrement the count.

18. Add a button to double the count value (x2).

19. Add a button to increment 5.

19. Add a button to increment 10 (Tip: You can use the same action as before, and pass a value to the action).
