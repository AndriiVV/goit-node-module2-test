// My first http-server

// подключение модуля http
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// создание web-сервера с обработчиком запросов
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader = ("Content-Type", "text/plain");
	res.end("Hello the best world!");
});

// запуск web-сервера
server.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}/`);
});
