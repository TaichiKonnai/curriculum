class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// ユーザー情報を保存する配列を作成
const users = [];

// ユーザー情報を登録する関数
function registerUser() {
    // nameフィールドの値を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // メールアドレスの重複を確認
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        // 既に登録済みの場合、メッセージを出力
        console.log(`このメールアドレスは既に登録されています: ${email}`);
    } else {
        // 未登録の場合はユーザー情報を配列に追加
        const newUser = new User(name, email);
        users.push(newUser);
        console.log(`ユーザーを登録しました: ${name}, ${email}`);
    }

    // 登録後にnameフィールドの値を削除
    document.getElementById('name').value = '';
    // 登録後にemailフィールドの値を削除
    document.getElementById('email').value = '';
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数
function findUser() {
    users.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
}
