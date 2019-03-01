let config = {
    backend: window.location.origin
};

if (process.env.NODE_ENV === 'development') {
    config.backend = 'http://localhost:5000';
}

export default config;