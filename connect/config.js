
const fs = require("fs")
const chalk = require("chalk")
/*Ubah Nama & Dll Cukup Dari sini(Udah Di set biar smua nama & wm Bisa diubah dari sini) 
Biar Newbie Gapusing ubah nama² 
Other*/
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6289648311511']
global.footer = "AlphinBotz"
global.fake = "AlphinBotz"
global.namebot = "AlphinBotz"
global.packname = "Buatan Siapa? Buatan Alphin\nMau nomor nya? 089648311511\nOrangnya ganteng dan baik\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
global.packname2 = "PemilikBot: 089648311511"
global.author = "Alfnabdillah"
global.email = "https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh"
global.game = "AlphinGame"
global.nameown = "PemilikBot 089648311511"
global.resultwibu = "Nih kak Resultnya, Dasar Wibu kntl"
global.nameyt = "GratisanManiaTv"
global.instagram = "https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh"
global.sessionName = "session"
global.github = "https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh"
global.done = "Done :)"
global.linkgrupss = "https://chat.whatsapp.com/Dse5mkgbOetEX7a0Rvofjh"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success donasi saldo dana: 089648311511',
    admin: 'Fitur Khusus Admin Group!donasi saldo dana: 089648311511',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!donasi saldo dana: 089648311511',
    owner: 'Fitur Khusus Owner Botdonasi saldo dana: 089648311511',
    group: 'Fitur Digunakan Hanya Untuk Group!donasi saldo dana: 089648311511',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!donasi saldo dana: 089648311511',
    bot: 'Fitur Khusus Pengguna Nomor Botdonasi saldo dana: 089648311511',
    wait: 'Loading...donasi saldo dana: 089648311511',
    linkm: 'Linknya Mana Kak?donasi saldo dana: 089648311511',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat ownerdonasi saldo dana: 089648311511'
}
global.BerryAwal = 5000
global.limitAwal= 10
global.gamewaktu = 50
global.waktu = 60000

//-[❌Jangan Ubah bagian ini❌]
global.tebakgambar = []
global.rkyt = []
global.hit = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 
global.ntidel = ['120363043965529911@g.us']
multipref = true;
oneprefix = false;
preff = "!"
//-[❌❌❌❌❌❌❌❌❌❌]
// REGEXX //
global.YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
global.IgIdRegex = /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/
global.FbIdRegex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/
global.TwitIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/
global.TtIdRegex = /(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/

//𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
