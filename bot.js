const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'adamad1755.aternos.me',
  port: 59948,
  username: 'AFK_BOT',
  version: false // auto detect
});

bot.once('spawn', () => {
  console.log('✅ Bot دخل للسرفر');

  // حركة خفيفة باش ما يطيحش AFK
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 15000);

  // دوران
  setInterval(() => {
    bot.look(Math.random() * Math.PI * 2, 0);
  }, 10000);
});

// منع الكراش
bot.on('kicked', reason => {
  console.log('❌ Bot تطرد:', reason);
});

bot.on('error', err => {
  console.log('⚠️ Error:', err.message);
});
