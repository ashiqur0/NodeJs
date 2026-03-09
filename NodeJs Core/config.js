require('dotenv').config();

const config = {
    app: {
        name: process.env.APP_NAME || "Default App",
        version: process.env.APP_VERSION || "1.0.0",
        port: process.env.PORT || 5000,
        env: process.env.NODE_ENV || "production"
    }
}

console.log(config.app);

module.exports = config;