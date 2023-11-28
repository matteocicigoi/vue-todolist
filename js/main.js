'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
        inputTask: '',
        list: [
            {
                text: 'Task 1',
                done: false
            },
            {
                text: 'Task 2',
                done: false
            },
            {
                text: 'Task 3',
                done: true
            }
        ]
      }
    },
    methods: {
        // rimuove i task
        removeTask(index){
            this.list.splice(index, 1);
        },
        // aggiunge i task
        addTask(){
            if(this.inputTask.trim() === ''){
                this.inputTask = '';
                return;
            }
            this.list.push({
                text: this.inputTask,
                done : false
            });
            this.inputTask = '';
        },
        // cambia il valore del elemento done
        checkTask(index){
            if(this.list[index].done === false){
                this.list[index].done = true;
            }else{
                this.list[index].done = false;
            }
        }
    }
  }).mount('#app');