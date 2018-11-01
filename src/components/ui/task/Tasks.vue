<template>
    <div>
        <div>
            <h3>All tasks</h3>
            <task v-for="task in tasks" :key="task.description">{{ task.description + ' (completed = ' + task.completed + ')'}}</task>
        </div>

        <br />
        <div>
            <h3>Incompleted tasks</h3>
            <task v-for="task in incompletedTasks" :key="task.task">{{ task.description }}</task>
        </div>
    </div>

</template>

<script>
import Task from "@/components/ui/task/Task";

export default {
    name: "Tasks",

    components: {
        Task
    },

    data() {
        return {
            tasks: [
                { description: "Go to store", completed: true },
                { description: "Do what you like", completed: false },
                { description: "Do anything :|", completed: true },
                { description: "Write code", completed: false },
            ]
        };
    },

    computed: {
        incompletedTasks() {
            return this.tasks.filter(task => !task.completed);
        }
    }
};
</script>