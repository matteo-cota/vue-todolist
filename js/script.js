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
        // Milestone 3: Metodo per aggiungere un nuovo todo
        addTodo() {
            // Aggiungiamo il nuovo todo solo se l'input non è vuoto
            if (this.newTodo.trim() !== '') {
                // Aggiungiamo un nuovo oggetto 'todo' all'array 'todos'
                this.todos.push({ text: this.newTodo, done: false });
                // Resettiamo l'input dopo aver aggiunto il todo
                this.newTodo = '';
            }
        },

        // Milestone 2: Metodo per rimuovere un todo dall'array
        removeTodo(index) {
            // 'splice' rimuove l'elemento all'indice specificato
            this.todos.splice(index, 1);
        },
    }


});