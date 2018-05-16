class Casino{
    constructor(SlotMachineAmount, CasinoMoney){
        if(SlotMachineAmount>0){
            this.SlotMachineAmount = SlotMachineAmount;
        }else{
            console.warn("Amount of slot machines cannot be less than zero");
        }
        if(CasinoMoney>0){
            this.CasinoMoney = CasinoMoney;
        }else{
            console.warn("Sum of money in Casino cannot be less than zero");
        }
        this.slotMachines = [];
        this.remainder = CasinoMoney%SlotMachineAmount;
        let slotMachine;
        let slotMachineMoney;
        if(this.remainder !== 0){
            slotMachineMoney = (this.CasinoMoney-this.remainder)/this.SlotMachineAmount; 
        }else{
            slotMachineMoney = this.CasinoMoney/this.SlotMachineAmount;
        }
        for(var i = 0; i < this.SlotMachineAmount-1; i++) {
            slotMachine = new SlotMachine(slotMachineMoney);
            this.slotMachines.push(slotMachine);
        }
        let slotMachineLucky = new SlotMachine(slotMachineMoney);
        this.slotMachines.push(slotMachineLucky);
        slotMachineLucky.isLucky = true;
        this.slotMachines[0].SlotMachineMoney += this.remainder;
    }

    getCasinoMoney(){
        let sum = 0;
        for(let i=0; i< this.slotMachines.length; i++){
            sum += this.slotMachines[i].SlotMachineMoney;
        }
        return sum;
    }

    getSlotMachineAmount(){
        let SlotMachineAmount =  this.slotMachines.length;
        return SlotMachineAmount;
    }

    addNewSlotMachine(){
    
        let max = 0;
        let index;
        for(let i=0; i<this.slotMachines.length;i++){
            if(max<this.slotMachines[i].SlotMachineMoney){
                max += this.slotMachines[i].SlotMachineMoney;
                index = i;
            }
        }

        const startSum =  this.slotMachines[index].SlotMachineMoney / 2; 
        this.slotMachines[index].SlotMachineMoney = this.slotMachines[index].SlotMachineMoney - startSum;     

        let slotMachine = new SlotMachine(startSum);
        this.slotMachines.push(slotMachine);

        console.log('You are added new Slot Machine! Now total amount is: ' + this.getSlotMachineAmount());
    }

    removeSlotMachine(number){
        const moneyDistribution = this.slotMachines[number].SlotMachineMoney / (this.getSlotMachineAmount()-1);
        for(let i=0;i<this.slotMachines.length;i++){
            this.slotMachines[i].SlotMachineMoney = this.slotMachines[i].SlotMachineMoney + moneyDistribution;
        }
        this.slotMachines.splice(number,1);

        console.log("You are deleted Slot Machine! Now total amount is: " + this.getSlotMachineAmount());
    }


    takeMoney(amount){
       let sortedSlotMachines = this.slotMachines.sort((a, b) => b.SlotMachineMoney - a.SlotMachineMoney);
       let takenMoney = 0;
       let excess ;
        for(let i=0; i<sortedSlotMachines.length; i++){
            if(takenMoney<=amount){
                takenMoney += sortedSlotMachines[i].SlotMachineMoney;
                excess = takenMoney - amount;
                if(takenMoney<amount){
                    sortedSlotMachines[i].SlotMachineMoney = 0;
                }else{
                    sortedSlotMachines[i].SlotMachineMoney = excess;
                }   
            }
        }
       return takenMoney-excess;
    }
}


class SlotMachine{
    constructor(SlotMachineMoney){
        if(SlotMachineMoney>0){
            this.SlotMachineMoney = SlotMachineMoney;
        }else{
            console.warn("Sum of money in Slot Machine cannot be less than zero");
        }      
        this.isLucky = false;
    }

    moneyInSlotMachine(){
        return this.SlotMachineMoney;
    }

    getMoneyFromSlotMachine(sum){
        let money;
        if(sum<=this.SlotMachineMoney){
            money=sum;
            this.SlotMachineMoney = this.SlotMachineMoney-sum;
        }
        return money;
    }

    addMoney(sum){
        this.SlotMachineMoney += sum;
    }

    playGame(sum){
        if(sum<=0){
            console.warn("If you want to play - put your money!!!");
        }else{
            console.log("----GOOD LUCK----");
            this.addMoney(sum);
            let yourNumber = '';
            const luckyNumber = 777;
            let win;
            if(this.isLucky === true){
                win = this.moneyInSlotMachine();
                console.log("You are put " + sum + "$")
                console.log("This slot Machine is LUCKY and your number is: " + luckyNumber);
                console.log("Jackpot!!!You are win all money!!!Total sum is: " + win + "$");
                console.log('----GET YOUR MONEY----');
                this.getMoneyFromSlotMachine(win);
            }else{
                yourNumber += Math.floor((Math.random() * 900) + 100);
                console.log("You are put " + sum + "$")
                console.log("Generated number is: "+yourNumber);
                if(yourNumber === luckyNumber){
                    win = this.moneyInSlotMachine();
                    console.log("Jackpot!!!You are win all money!!!Total sum is: " + this.moneyInSlotMachine() + "$");
                    console.log('----GET YOUR MONEY----');
                    this.getMoneyFromSlotMachine(win);
                }else if(yourNumber[0]===yourNumber[1] &&  yourNumber[1]===yourNumber[2]){
                    win = sum*5;
                    console.log("x3!!!!!You are win :" + win + "$");
                    console.log('----GET YOUR MONEY----');
                    this.getMoneyFromSlotMachine(win);
                }else if(yourNumber[0]===yourNumber[1] || yourNumber[0]===yourNumber[2] || yourNumber[1]===yourNumber[2]){
                    win = sum*2;
                    console.log("x2!!!You are win :" + win + "$");
                    console.log('----GET YOUR MONEY----');
                    this.getMoneyFromSlotMachine(win);
                }else{
                    console.log("You are loose all money!");
                    console.log('----TRY AGAIN----');
                }
            }
        }
    }
}


var casino = new Casino(13,61700);
console.log("Total sum of money in Casino is: " + casino.getCasinoMoney()+ "$");
console.log("Total amount of slot machines in Casino is: " + casino.getSlotMachineAmount());
casino.addNewSlotMachine();
casino.addNewSlotMachine();
casino.removeSlotMachine(2);
console.log("You are take money from casino: "+casino.takeMoney(5200)+"$");
console.log("Now total sum of money in Casino is: " + casino.getCasinoMoney().toFixed(0)+ "$");
casino.slotMachines[3].playGame(1000);
console.log("Now total sum of money in Casino is: " + casino.getCasinoMoney()+ "$");
casino.slotMachines[9].playGame(420);
console.log("Now total sum of money in Casino is: " + casino.getCasinoMoney()+ "$");
