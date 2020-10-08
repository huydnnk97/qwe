new Vue({
  el: '#app',
  data: {
    message: "Vue.js is awesome!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

