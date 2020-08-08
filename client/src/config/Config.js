const dev = {
    BASE_URL: 'http://127.0.0.1:8080/api/v1';
}

const prod = {
    BASE_URL: 'production api url'
}

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
    config
}