md5 = require('js-md5');
crypto = require('crypto');

const login = require("./api/auth").login;
const pause = require("./api/auth").pause;

const Secrets = {
    username: process.env.LEISHEN_USERNAME,
    password: md5(process.env.LEISHEN_PASSWORD)
}


function start(username, password) {
    console.log('🌀雷神加速器暂停助手 开始运行-------')
    if (!username || !password) {
        console.log("Empty username or password");
        return;
    }
    const user = {
        country_code: 86,
        lang: "zh_CN",
        mobile_num: username,
        os_type: 4,
        password: Secrets.password,
        region_code: 1,
        user_type: "0",
        src_channel: "guanwang",
        username: Secrets.username
    };

    const sign_user_request = sign(user)
    login(sign_user_request).then(res => {
        if (res.data.code == 0) {
            let account_token = res.data.data.login_info.account_token;
            pause({"account_token": account_token, "lang": "zh_CN"}).then(res2 => {
                console.log(res2.data.code + ':' + res2.data.msg);
                console.log('🌀雷神加速器暂停助手 成功-------')

            })
        } else {
            console.log('🌀雷神加速器暂停助手 失败-------')
        }
        console.log('🌀雷神加速器暂停助手 结束运行-------')
    })


}

function sign(t) {
    const a = Math.floor((new Date).getTime() / 1e3).toString()
        , n = {
        ts: a,
        ...t
    }
        , s = Object.keys(n).sort()
        , o = {};
    for (const t of s)
        o[t] = n[t];
    const r = queryString({
        ...o,
        key: "5C5A639C20665313622F51E93E3F2783"
    }, !1).toString();
    return console.log("signal", r),
        {
            ...t,
            ts: a,
            sign: hexMD5(r)
        }

}
function queryString(t, e = true) {
    return Object.entries(t)
        .map(([t, i]) => `${t}=${e ? encodeURIComponent(i) : i}`)
        .join("&");
}

function hexMD5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}


start(Secrets.username, Secrets.password);