> `redux` -> responsible for our data (storing, updating)

> `react-redux` -> responsible for connecting our app to redux

> import `createStore` -> stores data, think of state

> store is looking for `reducder` -> a function that used to update store value

#

`reducer` -> is the only way to update store, accepts two arguments

1. old state/state before upddate
2. action - what we would want to do

& must return a new state

#

> `dispatch` method -> send actions to the store

> actions(object) -> must have type property, what kind of action

> Don't Mutate state -> redux built on immutability

> `immutability` -> makes a copy

#

> `provider` & `connect` -> react-redux
