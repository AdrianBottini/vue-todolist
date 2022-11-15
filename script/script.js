new Vue({
    el: '#app',
    data: {
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],
        newTodo: '',
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push(this.newTodo.trim());
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
    }
});