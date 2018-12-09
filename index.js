const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "605130606:AAFN2DCKYMV8og5aBiOVEhmKLzXNGAas8ug";
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on("message", msg => {
	bot.sendMessage(msg.chat.id, `Hello dear ${msg.from.first_name}!`).then(() => {});
});