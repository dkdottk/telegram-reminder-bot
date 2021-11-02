const { Scenes } = require('telegraf');

const startScene = new Scenes.BaseScene('startScene');

startScene.enter( async ctx => {
    await ctx.reply('')
})

startScene.leave()

module.exports = startScene;
