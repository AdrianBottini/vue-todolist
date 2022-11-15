new Vue({
    el: '#app',
    data: {
        todos: [ 
            {
                text: 'Fare la Spesa',
                done: true
            },
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare il bucato',
                done: false
            },
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