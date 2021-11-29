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
        inputValue: "",
        clock: ""
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
            
        },
        setClock: function() {
            const time = () => {
                const data = new Date();
                let hour = data.getHours();
                let minutes = data.getMinutes();
                switch (hour) {
                    case 13: hour = 1; break;
                    case 14: hour = 2; break;
                    case 15: hour = 3; break;
                    case 16: hour = 4; break;
                    case 17: hour = 5; break;
                    case 18: hour = 6; break;
                    case 19: hour = 7; break;
                    case 20: hour = 8; break;
                    case 21: hour = 9; break;
                    case 22: hour = 10; break;
                    case 23: hour = 11; break;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                this.clock = hour + ":" + minutes;
            }
            setInterval(time, 10);
        }
    },
    created() {
        this.setClock();
    }
});