//問１ isEven関数
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num) {
    if (num % 2 === 0) {
        console.log(num + 'は偶数です');
    }
}

    isEven(2);
    isEven(5);
    isEven(12);
    isEven(13);
    isEven(15);
    isEven(18);
    isEven(22);
//ここ５時間かかりました...isEven()にconsole数字(今回num)を入れる

//問２　getNumGas関数
let car = {
    gas: '〇〇',
    num: '△△',
};
console.log("ガソリンは" + car.gas + "です。", "ナンバーは" + car.num + "です。");