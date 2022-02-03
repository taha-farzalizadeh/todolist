<template>
  <div>
    <h1 class="text-center font-weight-bold text-bold mt-3">ToDo list</h1>
    <div class="text-center">
      <input  class="add-task-input" type="text" v-model="taskText" placeholder="add your task text..." @keypress.enter="addNewTask">
      <button class="btn btn-success add-task-button" @click="addNewTask">Add</button>
    </div>
    
    <Tasks v-for="(task,index) in $store.state.tasksList" :key="index" :task="task"/>
  </div>
</template>

<script>
import Tasks from "../components/tasks.vue"
export default {
  name: 'IndexPage',
  components:{
    Tasks
  },
  data(){
    return{
      taskText:'',
    }
  },
  methods:{
    addNewTask(){
      if(this.taskText!=''){
        this.$store.commit('ADD_NEW_TASK' , this.taskText)
        this.taskText = ''
      }
    }
  }
}
</script>
