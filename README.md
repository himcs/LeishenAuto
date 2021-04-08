# 雷神加速器自动暂停
 雷神加速器 自动暂停API
## 🌀简介

为了防止自己忘记关闭加速器,浪费宝贵的时间(Money),于是了这个项目，实现每日自动暂停加速。

## 📐部署

1. Fork 仓库
3. 设置雷神账号密码
3. 启用 Action


### 1. Fork 仓库

- 项目地址：[LeishenAuto](https://github.com/himcs/LeishenAuto/)
- 点击右上角`Fork`到自己的账号下

![fork](https://i.loli.net/2020/10/28/qpXowZmIWeEUyrJ.png)

- 将仓库默认分支设置为 master 分支

### 2. 设置雷神账号密码

- 回到项目页面，依次点击`Settings`-->`Secrets`-->`New secret`

![new-secret.png](https://i.loli.net/2020/10/28/sxTuBFtRvzSgUaA.png)

![add-secret](https://i.loli.net/2021/04/08/ZtAw6Qmcrq2S5de.png)

- LEISHEN_USERNAME 账号
- LEISHEN_PASSWORD 密码

依次配置 账号密码

###  3. 启用 Actions

> Actions 默认为关闭状态，Fork 之后需要手动执行一次，若成功运行其才会激活。

返回项目主页面，点击上方的`Actions`，再点击左侧的`雷神自动停止加速`，再点击`Run workflow`
    
![run](https://i.loli.net/2020/10/28/5ylvgdYf9BDMqAH.png)