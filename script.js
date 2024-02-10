
const telegramApi = require("node-telegram-bot-api")



const token = "6951210613:AAHkG65yzwr6-H2Nv_lAoOaHC3314JgWP-Q"



const bot = new telegramApi( token , {polling:true} ) 



bot.on(`message` ,  async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    console.log(msg);


    if (text === "/start") {
        await bot.sendSticker(chatId , "https://tlgrm.eu/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/3.webp")
        await bot.sendMessage(chatId , "okkk")
        
    }
    if(text.toLowerCase() == "qunem vort"){
        for (let i = 0; i < 100; i++) {
            await bot.sendMessage( chatId , "qon@ quni")
            
        }
    }
    if(text.toLowerCase() == "8481"){
        await bot.sendMessage( chatId , "du mtar privat DB")
    }

    return await bot.sendMessage( chatId , "ch@ joga")


})







