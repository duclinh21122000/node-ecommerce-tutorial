const app = require("./src/app");

const PORT = 3001

const server = app.listen(PORT, () => {
    console.log(`Node eCommerce  start with ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
})