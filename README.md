# React Redux Counter

> Redux is a state management tool. While it's mostly used with React, it can be used with any other JavaScript framework or library.

This project is inspired by [this tutorial](https://www.youtube.com/watch?v=CVpUuw9XSjY)

## Explained 

```js
import { createStore } from 'redux';


// Store
// Note: This is the globalized state

// Action
// Note: This discribes what we want to do

// All it does is to return an object
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// Reducer
// Note: This discribes how the actions will
// transform the state into the next state

// A function that has the initial state 
// and the action it's based on
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
}

// Add the reducer to the store
let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()))

// Dispatch
// Note: How we can execute the actions
// It's like saying dispatch the action to the 
// reducer and then the store will get updated

store.dispatch(increment())
```

React is explained by Ben Halpern in [this comment](https://dev.to/tiffanywismer/explain-reactjs-like-im-five--2606).
