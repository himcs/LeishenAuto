const request = require('../utils/request');

function pause(data) {
    return request({
        url: '/api/user/pause',
        method: 'post',
        data
    })
}

module.exports = {pause}