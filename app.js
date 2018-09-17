new Vue({
    el: '#app_game',
    data: {
        powerYou: 100,
        powerMonster: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.powerYou = 100;
            this.powerMonster = 100;
        }
    }
})

