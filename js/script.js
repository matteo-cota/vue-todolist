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


});