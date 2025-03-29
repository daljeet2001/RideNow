
const http = require('http');
const app=require('./app');
const port=process.env.PORT || 3000;
const { initializeSocket } = require('./socket');
const server=http.createServer(app);

initializeSocket(server);


server.listen(port,()=>{
    console.log(`User service is running on port ${port}`);
});


