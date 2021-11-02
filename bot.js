require('dotenv').config();
const { Telegraf, Markup, Scenes, session, Stage} = require('telegraf');

const token = process.env.BOT_TOKEN
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token, {
    telegram: { webhookReply: true }
})

const stage = new Scenes.Stage([

]);

bot.use(session())
bot.use(stage.middleware());

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

