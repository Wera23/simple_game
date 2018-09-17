new Vue({
    el: '#app_game',
    data: {
        powerYou: 100,
        powerMonster: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.powerYou = 100;
            this.powerMonster = 100;
        },
        attack: function () {
            this.powerMonster -= this.calculateLoss(3, 10);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            this.powerMonster -= this.calculateLoss(10, 20);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();     
        },
        addLife: function () {
            if (this.powerYou <=90) {
                this.powerYou +=10;
            }
            else {
                this.powerYou = 100;
            }            
            this.monsterAttacks();
        },
        giveUp: function () {

        }, 
        monsterAttacks: function() {
            this.powerYou -= this.calculateLoss(5, 12);//(min, max)
            this.checkWin();
        },
        calculateLoss: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
            //(max, min) - max(zaokręglenie z losowej liczby razy max (co da wynik z przecinkiem, ale dzięki floor zaokrągli. +1 jest po to, by gdy padnie o.6 to zaokrąglenie będzie do 0 a nie może być atak na 0. z plus jeden będzie zawsze wyżej od zera))
        },
        checkWin: function () {
            if (this.powerMonster <= 0) {
                if (confirm('Wygrałeś! Czy chcesz zacząć nową grę?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.powerYou <= 0) {
                if (confirm('Przegrałeś! Zacząć nową grę?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }

});

