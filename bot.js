const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'adamad1755.aternos.me',
    port: 59948,
    username: 'AFK_BOT',
    version: false
  });

  bot.once('spawn', () => {
    console.log('✅ Bot دخل للسرفر');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 300);
    }, 15000);

    setInterval(() => {
      bot.look(Math.random() * Math.PI * 2, 0);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('🔄 الاتصال تقطع، إعادة المحاولة بعد 10 ثواني...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err.message);
  });
}

startBot();
