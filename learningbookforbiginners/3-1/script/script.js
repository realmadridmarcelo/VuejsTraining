new Vue({
    el: '#app',
    data() {
        return {
            text: 'hello Vue.js'
        };
    },
    methods: {
        hadleClick() {
            this.text = 'button pushed';
        }
    }
});