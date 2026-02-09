const mineflayer = require('mineflayer');

function startBot() {
  console.log('⏳ انتظار 20 ثانية قبل الاتصال...');

  setTimeout(() => {
    const bot = mineflayer.createBot({
      host: 'Chorfa1.aternos.me',
      port: 51996,
      username: 'AFK_BOT',
      version: '1.20.1'
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
      console.log('🔄 خرج، إعادة المحاولة...');
      setTimeout(startBot, 15000);
    });

    bot.on('error', err => {
      console.log('⚠️', err.message);
    });

  }, 20000);
}

startBot();
