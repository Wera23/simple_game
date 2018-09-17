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
        },
        attack: function(){
            var max = 10;
            var min = 3;
            var loss = Math.max(Math.floor(Math.random()* max) + 1, min)
            this.powerYou -= loss;

            if (this.powerYou <= 0){
                alert('Potwór przegrał!');
                this.gameIsRunning = false;
                return;
            }
            
            var max = 12;
            var min = 5;
            var loss = Math.max(Math.floor(Math.random()* max) + 1, min)
            this.powerMonster -= loss;

            if (this.powerMonster <= 0){
                alert('Potwór wygrał!');
                this.gameIsRunning = false;
                
            }
        },
        specialAttack: function(){

        },
        addLife: function(){

        },
        giveUp: function(){

        }
    }
})

