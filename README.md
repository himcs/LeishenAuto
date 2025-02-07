# 雷神加速器自动暂停
 雷神加速器 自动暂停API
## 🌀简介

为了防止自己忘记关闭加速器,浪费宝贵的时间(Money),于是了这个项目，实现每天0点自动暂停加速。

## 📐部署

1. Fork 仓库
3. 设置雷神账号的 account_token
3. 启用 Action


### 1. Fork 仓库

- 项目地址：[LeishenAuto](https://github.com/himcs/LeishenAuto/)
- 点击右上角`Fork`到自己的账号下

![fork](https://i.loli.net/2020/10/28/qpXowZmIWeEUyrJ.png)

- 将仓库默认分支设置为 master 分支

### 2. 设置雷神账号的 account_token
- 使用电脑登录雷神加速器官网，点击右上角头像，然后按 F12 打开开发者工具，找到`Application`选项卡，点击左侧`Storage`-->`Local Storage`-->`https://vip.leigod.com`，找到`account_token`，复制其值
- ![image.png](https://s2.loli.net/2025/01/22/tnp6wIjDWaeSBkN.png)
- 选择`账号设置`，在`账号设置`页面找到`账号Token`，点击`复制`按钮
- 回到项目页面，依次点击`Settings`-->`Secrets`-->`New secret`

![new-secret.png](https://s2.loli.net/2025/01/22/ZLcmqzhpMUPBODf.png)
![add-secret](https://s2.loli.net/2025/01/23/C9EdjuWvQDsgRGl.png)

- LEISHEN_ACCOUNT_TOKEN 账户Token

配置好 account_token

###  3. 启用 Actions

> Actions 默认为关闭状态，Fork 之后需要手动执行一次，若成功运行其才会激活。

返回项目主页面，点击上方的`Actions`，再点击左侧的`雷神自动停止加速`，再点击`Run workflow`

类似下图
![run](https://i.loli.net/2020/10/28/5ylvgdYf9BDMqAH.png)