import { createStore } from "redux";
import rootreducers from "../reducers/rootReducer";

const store = createStore(
    rootreducers
);
export default store
