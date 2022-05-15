const app = Vue.createApp({
  data() {
    return {
      name: "Colton",
      age : 29,
      agePlus5 : 29 + 5,
      imgSrc: 'testImage.png'
      
    };
  },
  methods: {
    ranNumber(){
      const number = Math.random()
      return number
    }
  },
});

app.mount("#assignment");
