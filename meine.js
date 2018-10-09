// TypeScript
import { Bot } from 'node-vk-bot'
 
// ES5
const { Bot } = require('node-vk-bot')
 
const bot = new Bot({
  token: 'YOUR TOKEN',
  group_id: 123456
}).start()
 
bot.get(/Hi|Hello|Hey/i, (message, exec, reply) => {
  const options =  { forward_messages: message.id }
 
  reply('Hello!', options)
})
