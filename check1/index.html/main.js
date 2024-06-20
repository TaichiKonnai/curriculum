//問１ isEven関数
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(){
    for (let i = 0 ; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            console.log(numbers[i] + 'は偶数です');
        }
    }
}

isEven();

//問２　getNumGas関数
class car {
    constructor(gas, num){
        this.gas = '〇〇';
        this.num = '△△';
    }
    getNumGas(){
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
    }
}
let 車 = new car('gas','num')
車.getNumGas();
