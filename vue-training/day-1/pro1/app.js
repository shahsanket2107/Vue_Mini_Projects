new Vue({
    el: '#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(5,25)
            if(this.checkWin()){
                return;
            }
            this.playerHealth -= this.calculateDamage(3,20)
            this.checkWin()
        },

        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(10,35);
            if(this.checkWin()){
                return;
            }
            this.monsterAttack()
        },

        monsterAttack: function(){
            this.playerHealth -= this.calculateDamage(10,30);
            this.checkWin()
        },

        heal: function(){
            this.playerHealth += this.playerHealth*0.2
            this.monsterHealth += this.monsterHealth*0.1
            if(this.playerHealth>=100){
                this.playerHealth = 100
            }
            if(this.monsterHealth>=100){
                this.monsterHealth = 100
            }
        },

        giveUp: function(){
            this.gameIsRunning = false
        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random()*max)+1, min)
        },

        checkWin: function(){
            if(this.monsterHealth <=0 ){
                if(confirm("You Win!!! Wanna Play Again?")){
                    this.startGame()
                }
                else{
                    this.gameIsRunning = false
                }
                return true
            }
            else if(this.playerHealth <=0 ){
                if(confirm("You Lost!! Wanna Play Again?")){
                    this.startGame()
                }
                else{
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    },
})