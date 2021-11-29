const app = new Vue({
    el: "#root",
    data: {
        reminders: [
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
        clock: "",
        addReminder: false
    },
    methods: {
        newReminder: function() {
            if (this.addReminder == false) {
                this.addReminder = true;
                this.reminders.push({
                    text: this.inputValue,
                    isDone: false
                });
                this.inputValue = "";
            } else {
                this.checkInput();
            }
        },
        focusInput: function() {
            if (this.reminders.length > 0) {
                let reminders = document.querySelectorAll(".reminder");
                reminders[this.reminders.length - 1].focus();
            }
        },
        loseFocus: function(i) {
            let reminders = document.querySelectorAll(".reminder");
            reminders[i].blur();
            this.checkInput();
        },
        checkInput: function() {
            if (this.reminders.length > 0) {
                this.addReminder = false;
                if (this.reminders[this.reminders.length - 1].text == "") {
                    this.reminders.splice(this.reminders.length - 1, 1);
                }
            }
        },
        removeReminder: function(i) {
            this.reminders.splice(i, 1);
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
    },
    updated() {
        if (this.addReminder == true) {
            this.focusInput();
        }
    }
});