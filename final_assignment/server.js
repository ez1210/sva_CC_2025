const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

// static 폴더 설정 추가
app.use(express.static('public'));

// 기본 라우팅 설정 (홈 페이지)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('🔌 New client connected');

  socket.on('new wish', (msg) => {
    io.emit('new wish', msg); // 모든 클라이언트에 전달
  });
});

http.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});