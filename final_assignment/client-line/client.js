const socket = io();

document.getElementById('sendBtn').onclick = () => {
  const wish = document.getElementById('wishInput').value;
  if (wish.trim()) {
    addLantern(wish); // 내 소원 표시
    socket.emit('new wish', wish); // 서버로 보내기
    document.getElementById('wishInput').value = '';
  }
};

socket.on('receive wish', (wish) => {
  addLantern(wish); // 다른 사람의 소원 보여주기
});

function addLantern(wish) {
  const lantern = document.createElement('div');
  lantern.className = 'lantern';
  lantern.innerText = wish;
  document.getElementById('lanterns').appendChild(lantern);
}