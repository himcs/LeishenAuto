const login = require("./api/auth").login;
const pause = require("./api/auth").pause;

const Secrets = {
    username: process.env.LEISHEN_USERNAME,
    password: process.env.LEISHEN_PASSWORD
}


function start(username, password) {
    if (!username || !password) {
        console.log("Empty username or password");
        return;
    }
    const user = {
        "username": username,
        "password": password,
        "user_type": "0",
        "src_channel": "guanwang",
        "lang": "zh_CN",
        "region_code": 1
    };

    login(user).then(res => {
        if (res.data.code == 0) {
            let account_token = res.data.data.login_info.account_token;
            pause({"account_token": account_token, "lang": "zh_CN"}).then(res2 => {
                console.log(res2);
            })
        }
    })
}


start(Secrets.username, Secrets.password);