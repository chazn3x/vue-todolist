const app = new Vue({
    el: "#root",
    data: {
        todos: [
            {
                text: "Fare la spesa",
                isDone: false
            },
            {
                text: "Portare fuori il cane",
                isDone: false
            },
            {
                text: "Cucinare il pranzo",
                isDone: false
            }
        ],
        inputValue: ""
    },
    methods: {
        addTodo: function() {
            if (this.inputValue != "") {
                this.todos.unshift({
                    text: this.inputValue,
                    isDone: false
                });
                this.inputValue = "";
            }
        },
        removeTodo: function(i) {
            this.todos.splice(i, 1);
        },
        done: function(i) {
            if (this.todos[i].isDone == false) {
                this.todos[i].isDone = true;
            } else this.todos[i].isDone = false;
            
        }
    }
});