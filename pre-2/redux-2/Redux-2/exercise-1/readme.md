# Counter App with React and Redux

First of All: create a react app

Second of All: install redux

Third of All create redux folder in src

Fourth of All: have fun :)

## Requirements

1. **Actions**:

   - Define three action types: `INCREMENT`, `DECREMENT`, and `RESET`.

2. **Action Creators**:

   - Create functions for:
     - Incrementing the counter: `increment()`
     - Decrementing the counter: `decrement()`
     - Resetting the counter: `reset()`

3. **Reducer**:

   - Implement a reducer that:
     - Increments the `count` state by 1.
     - Decrements the `count` state by 1.
     - Resets the `count` state to 0.

4. **Initial State**:

   - Set the initial state as an object with `count: 0`.

5. **Store**:
   - Create a Redux store using `createStore` and the counter reducer.

---

### Create React UI

You have a preview image of a counter app that you need to build using React.

---

### Connect Redux Logic to React UI

After creating the Redux logic and the counter UI using React, the next step is to connect them using the **react-redux** library.

**Steps**:

1. Install **react-redux** and wrap your project with the **Provider** component from **react-redux**.
2. Use **useDispatch** and **useSelector** hooks to store data inside the Redux state and retrieve that data.

**Requirements**:

- When the **Increment** button is clicked, the value in the Redux store should increase by one.
- When the **Decrement** button is clicked, the value in the Redux store should decrease by one.
- When the **Reset** button is clicked, the value in the Redux store should reset to zero.
