<script>
import { reactive } from "@vue/composition-api";


export default {
  setup(){
    const {state, addNewTodo, removeTodo} = useTodo();
    return {
      state,
      addNewTodo,
      removeTodo
    };
  }
}
function useTodo(){
  let state = reactive({
    todo: "",
    todos: []
  });

  function addNewTodo(){
    if (state.todo!='') {
      state.todos.push(state.todo);
      state.todo ='';
    }
  }

  function removeTodo(i){
    state.todos.splice(i,1)
  }

  return{
    state,
    addNewTodo,
    removeTodo
  };
}
</script>

<template>
  <div id="app">
 <section class = "container">
   <div class="card">
     <div class="card-header"> <h3> Add New Todo</h3></div>

   <div class="card-body">
      <input type="text" class = "form-control" v-model ="state.todo"/>
      <button class="btn btn-primary my-2" @click="addNewTodo"> Add Todo</button>
   </div>
   </div> 

  <div class="container my-5">
  <div class="card">
    <div class="card-header"> <h3> MyTodos</h3></div>
    <div class="card-body">
     <ul class="list-group">
       <li class="list-group-item" v-for="(todo, i) in state.todos" :key="i">
        {{todo}} <i class="fa fa-trash" aria-hidden="true" @click="removeTodo(i)"></i>
       </li>
     </ul>
    </div>
  </div>
  </div>
 </section>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fa {
  color:red;
  margin-left: 20px;
}
</style>
