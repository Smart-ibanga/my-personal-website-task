document.getElementById('time-utc').innerText = new Date().toUTCString().split(' ')[4];
document.getElementById('day').innerText = new Date().toLocaleString('en-us', { weekday: 'long' });