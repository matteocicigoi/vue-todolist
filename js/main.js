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
        removeTask(index){
            this.list.splice(index, 1);
        },
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
        }
    }
  }).mount('#app');