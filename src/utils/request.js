import config from '@config'
import axios from 'axios'

const defaultHeaders = { 'Content-Type': 'application/json' }

// generic request handler
export default ({ url, method, data = {}, baseURL, headers = defaultHeaders }) => {
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

    const requestURL = `${baseURL || config.api.baseURL}${url}`

    return axios
        .request({
            url: requestURL,
            method,
            headers,
            [dataOrParams]: data,
        })
        .then(res => Promise.resolve(res.data))
        .catch(e => Promise.reject(e))
}
