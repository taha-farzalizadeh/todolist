export const state = () =>({
    tasksList:[]
})

export const mutations = {
    ADD_NEW_TASK (state , task){
        state.tasksList.push({
            text : task,
            status:"todo"
        })
    },
    REMOVE_TASK(state , task){
        state.tasksList.splice(state.tasksList.indexOf(task,1))
    },
    DOING_TASK(state , task){
        task.status='doing'
    },
    DONE_TASK(state , task){
        task.status='done'
    },
    TODO_TASK(state , task){
        task.status='todo'
    }
}