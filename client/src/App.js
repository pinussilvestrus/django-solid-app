
import { 
  createEffect,
  createState
 } from 'solid-js';

import fetch from 'axios';

import './App.css';
import axios from 'axios';

const URL = 'http://localhost:8000/api';

function App() {

  const [ state, setState ] = createState({
    todos: []
  });

  createEffect(async () => {

    // fetch todos
    const { data } = await axios.get(URL + "/todos/");

    setState('todos', data);

  });



  return (
    <div class="app">
      <header class="app-header">

      <div class="app-title">Todos</div>  
      <For each={state.todos} fallback={<div>No Todos</div>}>
        {todo => (

          <div class="todo-item">
            <input type="checkbox" id={'todo-' + todo.id} checked={todo.completed} />
            <label for={'todo-' + todo.id}>{todo.title}</label>
          </div>
        )}
      </For>
      </header>
    </div>
  );
}

export default App;
