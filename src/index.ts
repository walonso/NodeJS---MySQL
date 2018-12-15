
import Server from './Server/Server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

//MySQL instance
//MySQL.instance;

server.start( () => {
    console.log('Servidor corriendo en puerto 3000');
})