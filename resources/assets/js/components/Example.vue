<template>
    <h1>My Tasks</h1>
    <h4>New Task</h4>
    <form action="#" @submit.prevent="edit ? updateTask(task.id) : createTask()">
        <div class="input-group">
            <input v-model="task.body" v-el:taskinput type="text" name="body" class="form-control" autofocus>
            <span class="input-group-btn">
                <button v-show="!edit" type="submit" class="btn btn-primary">New Task</button>
                <button v-show="edit" type="submit" class="btn btn-primary">Edit Task</button>
            </span>
        </div>
    </form>
    <h4>All Tasks</h4>
    <ul class="list-group">
        <li class="list-group-item" v-for="task in list">
            {{ task.body }}
            <button @click="showTask(task.id)" class="btn btn-primary btn-xs">Edit</button>
            <button @click="deleteTask(task.id)" class="btn btn-danger btn-xs">Delete</button>
        </li>
    </ul>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
