// Creiamo una nuova istanza Vue collegata all'elemento con id 'app'
new Vue({
    el: '#app',
    data: {
        newTodo: '',

        // 'todos' è un array di oggetti, ognuno con 'text' e 'done'
        todos: [
            { text: "Comprare il pane", done: false },
            { text: "Andare in palestra", done: true },
            { text: "Studiare Vue.js", done: false }
        ]
    },

    methods: {

        // Milestone 2: Metodo per rimuovere un todo dall'array
        removeTodo(index) {
            // 'splice' rimuove l'elemento all'indice specificato
            this.todos.splice(index, 1);
        },
    }


});