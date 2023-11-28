'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
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
        }
    }
  }).mount('#app');