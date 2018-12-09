const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "605130606:AAFN2DCKYMV8og5aBiOVEhmKLzXNGAas8ug";
const bot = new TelegramBot(TOKEN, {polling: true});

console.log("Bot started");

var options = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{ text: 'VK', url: 'https://vk.com/yonder' }],
			[{ text: 'Согласен', callback_data: '1' }],
			[{ text: 'Не согласен', callback_data: '2' }]
		]
	})
};
bot.on("message", msg => {
	const answer = "Message test";
	bot.sendMessage(msg.chat.id, answer, options);
});

bot.on('callback_query', function (answer) {
	// const sendFunc = bot.answerCallbackQuery;
	// const sendFunc = bot.sendMessage;
	switch (answer.data) {
		case "1":
			bot.sendMessage(answer.message.chat.id, 'Answer test 1');
			break;
		case "2":
			bot.sendMessage(answer.message.chat.id, 'Answer test 2');
			break;
	}

	bot.answerCallbackQuery(answer.id);
});