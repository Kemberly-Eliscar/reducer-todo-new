import React, { useReducer } from 'react';
import {reducer, initialState} from "./reducers/reducer";
import './to_do_list.scss'
//import 'semantic-ui-css/semantic.min/css'

import ToDoCard from './components/ToDoCard'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDoCard state = {state} dispatch = {dispatch} />
     
  );
}

export default App;
