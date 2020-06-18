import request from '@request'

export const getFeed = () => {
    return request({
        url: '/feed',
        method: 'GET',
    })
}

export const getLifeChallange = id =>
    request({
        url: `/life-challenge?ids[]=${id}`,
        method: 'GET',
    })

export const create = data =>
    request({
        baseURL: 'http://dummy.restapiexample.com/api/v1',
        url: `/create`,
        method: 'POST',
        data,
    })
