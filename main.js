const pause = require("./api/auth").pause;

const Secrets = {
    account_token: process.env.LEISHEN_ACCOUNT_TOKEN
}

async function start(account_token) {
    console.log('🌀雷神加速器暂停助手 开始运行-------')

    try {
        const res = await pause({"account_token": account_token, "lang": "zh_CN"});

        if (res.data.code !== 0) {
            if (res.data.code === 400803) { // 400803 - 账号已经停止加速，请不要重复操作
                console.warn(`🟡雷神加速器暂停成功: ${res.data.code} - ${res.data.msg}`);
                return;
            }
            console.error(`🔴雷神加速器暂停失败: ${res.data.code} - ${res.data.msg}`);
            process.exit(1); // 非零退出码可以让 GitHub Action 失败
        }

        console.log(res.data.code + ':' + res.data.msg);
        console.log('🌀雷神加速器暂停助手 成功-------')
    } catch (error) {
        console.error('🔴雷神加速器暂停失败:', error.message);
        process.exit(1);
    }

    console.log('🌀雷神加速器暂停助手 结束运行-------')
}

start(Secrets.account_token);