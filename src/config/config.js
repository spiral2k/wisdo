export default {
    isDev: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
    isProd: process.env.NODE_ENV === 'production',
    isStaging: process.env.NODE_ENV === 'staging',
    api: {
        baseURL: ' https://wisdo-test-react.herokuapp.com',
    },
}
