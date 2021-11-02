require('dotenv').config();
const { Telegraf, Markup, Scenes, session, Stage} = require('telegraf');
const startScene = require('./scenes/startScene');
const reminderScene = require('./scenes/reminderScene')

const token = process.env.BOT_TOKEN
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token, {
    telegram: { webhookReply: true }
})

const stage = new Scenes.Stage([
    startScene,
    reminderScene
]);

bot.use(session())
bot.use(stage.middleware());

bot.launch().then(r => console.log)

bot.command('start', (ctx) => ctx.scene.enter('startScene'))
bot.command('reminder', (ctx) => ctx.scene.enter('reminderScene'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

