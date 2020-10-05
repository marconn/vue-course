const app = Vue.createApp({
    data() {
        return {
            name: 'Marco',
            age: 28,
            favoriteNumber: Math.random(),
            imgLink: 'https://bgr.com/wp-content/uploads/2016/05/scared-surprised-cat-face.jpg?quality=70&strip=all&w=782'
        }

    }, 
    methods: {
        ageInNextYears(years) {
            return this.age + years;
        },
        randomNumber() {
            return Math.random();
        }
    }
})

app.mount('#assignment');