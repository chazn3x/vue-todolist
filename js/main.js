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
            this.removeDelete();
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
            this.removeDelete();
            if (this.reminders.length > 0) {
                let reminders = document.querySelectorAll(".reminder");
                reminders[this.reminders.length - 1].focus();
            }
        },
        loseFocus: function(i) {
            this.removeDelete();
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
        textAreaAdjust: function(i) {
            let reminders = document.querySelectorAll(".reminder");
            reminders[i].style.height = "auto";
            reminders[i].style.height = reminders[i].scrollHeight + "px";
        },
        removeReminder: function(i) {
            let reminders = document.querySelectorAll(".reminder");
            reminders[i].style.height = "auto";
            this.reminders.splice(i, 1);
        },
        done: function(i) {
            this.removeDelete();
            this.loseFocus(i);
            if (this.reminders[i].isDone == false) {
                this.reminders[i].isDone = true;
            } else this.reminders[i].isDone = false;
        },
        showDelete: function() {
            let deleteBtns = document.querySelectorAll(".delete-icon");
            if (deleteBtns[0].classList.contains("delete")) {
                this.removeDelete();
            } else deleteBtns.forEach(item => item.classList.add("delete"));
        },
        removeDelete: function() {
            let deleteBtns = document.querySelectorAll(".delete-icon");
            deleteBtns.forEach(item => item.classList.remove("delete"));
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