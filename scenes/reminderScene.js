const { Scenes } = require('telegraf');

const reminderScene = new Scenes.BaseScene('reminderScene');

reminderScene.enter( async ctx => {
    await ctx.reply('Create a reminder with /reminder')
})

reminderScene.leave()

module.exports = reminderScene;
