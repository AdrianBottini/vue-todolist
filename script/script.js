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
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
        ],
        newTodo: {
            text: '',
            done: false
        },
    },
    methods: {
        addTodo() {
            if (this.newTodo.text.trim()) {
                this.todos.push({
                    text: this.newTodo.text.trim(),
                    done: this.newTodo.done,
                });
                this.newTodo.text = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        invertDone(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }
});