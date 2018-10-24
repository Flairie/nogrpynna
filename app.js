// TypeScript
const VkBot = require('node-vk-bot')
 
 
const bot = new VkBot(process.env.BOT_TOKEN,)
 
bot.command('/start', (ctx) => {
  ctx.reply('Hello!')
})

bot.startPolling()
