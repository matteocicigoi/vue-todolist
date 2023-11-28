'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
        list: [
            {
                text: 'Todo 1',
                done: false
            },
            {
                text: 'Todo 2',
                done: false
            },
            {
                text: 'Todo 3',
                done: true
            }
        ]
      }
    }
  }).mount('#app');