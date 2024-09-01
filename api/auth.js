const request = require('../utils/request');

function login(data) {
    return request({
        url: '/api/auth/login/v1',
        method: 'post',
        data
    })
}

function pause(data) {
    return request({
        url: '/api/user/pause',
        method: 'post',
        data
    })
}

module.exports = {login, pause}