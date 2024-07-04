//問１ isEven関数
let numbers = [2, 5, 12, 13, 15, 18, 22, 23, 24, 25,100];
//勝手に文字増やして試してみました。
function isEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i] + 'は偶数です');
        }
    }
}

isEven(numbers);


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
