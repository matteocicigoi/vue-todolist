# Esercizio: Vue To Do List

```js
list: [
            {
                text: 'Task 1',
                done: false
            }
];
```

### Funzione removeTask

argomento: posizione

- rimuove il task dall'array

### Funzione addTask

- se il valore dell'input è vuoto o contiene solo spazi
    - reimposta il valore
    - esce dalla funzione
- aggiunge il valore al array
- reimposta il valore

### Funzione checkTask

argomento: posizione

- se il valore di done è false
    - lo imposta a true
- altrimenti
    - lo imposta a false