1.A store keeps your app's data.
2.An action that explains how the data changes.
3.A reducer that makes the changes to the data based on the action.

## Redux mechanism
- In order to update the global state with redux, we start by calling an action creator in a component
- Then dispatch the action that resulted from the action creator.
- This action will then reach the store.
- Our reducer will pick up the action and update the state according to the instruction.
- Then it triggers a re-render of the UI where the cycle finishes.
### REDUX VS REDUCER
whenever we dispatching action in useReducer, directly dispatching action in reducer.
But in redux ,we are dispatching the action in store, where reducer will pick up the action and update based on the instruction which we have given.
## Middleware
Middleware is a function that sits between dispatching the action and the store.
This allows us to run the code after dispatching ,but before reaching in the store
Usually ,after we dispatch ,the action immediately reaches the reducer and the state is updated.
But with a middleware ,we can do something with the action before that action actually gets into the reducer.
- Middleware is perfect place to implement asynchronous operation
- API calls ,timers and logging into the console 
- Crash reporting.
- Pausing and cancelling the action
- Perfect place for side effects