const makeWASocket = require("@whiskeysockets/baileys").default
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const axios = require('axios')
const pino = require('pino')
const fs = require('fs')
let phoneNumber = "51957757804"; // cambiar número
const { default: JulsBotIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
const banner = cfonts.render((`YOMI`), {
font: 'tiny',             
align: 'center',           
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`blue`,`green`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

// Constantes Editables
const prefixo = "."; // Cambiar Prefijo Aquí
const wm = "joel.xyz" // cambiar creador
const botname = "Yomibot-md" // Cambiar nombre del bot

const numerodono = "+51957757804"; // cambiar número
const themeemoji = "🥰" ; // cambiar emoji

async function startProo() {

// Método Privado con Número // Encriptado
function _0x4cf1(_0x398f11,_0x5d887d){const _0x2c06f3=_0x2c06();return _0x4cf1=function(_0x4cf186,_0x177a47){_0x4cf186=_0x4cf186-0x1ea;let _0x2038cd=_0x2c06f3[_0x4cf186];return _0x2038cd;},_0x4cf1(_0x398f11,_0x5d887d);}const _0x13243b=_0x4cf1;(function(_0x2a5c55,_0x1c7ac7){const _0x126f84=_0x4cf1,_0x27717d=_0x2a5c55();while(!![]){try{const _0x4e0ca7=parseInt(_0x126f84(0x1f8))/0x1+parseInt(_0x126f84(0x1ff))/0x2*(parseInt(_0x126f84(0x204))/0x3)+parseInt(_0x126f84(0x1fe))/0x4*(parseInt(_0x126f84(0x1f4))/0x5)+-parseInt(_0x126f84(0x1fb))/0x6+-parseInt(_0x126f84(0x1ea))/0x7+-parseInt(_0x126f84(0x1ef))/0x8+-parseInt(_0x126f84(0x1f6))/0x9;if(_0x4e0ca7===_0x1c7ac7)break;else _0x27717d['push'](_0x27717d['shift']());}catch(_0x31bd4b){_0x27717d['push'](_0x27717d['shift']());}}}(_0x2c06,0xd66b7));let {version,isLatest}=await fetchLatestBaileysVersion();const {state,saveCreds}=await useMultiFileAuthState('./session'),msgRetryCounterCache=new NodeCache(),sock=makeWASocket({'logger':pino({'level':_0x13243b(0x1f0)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':['Ubuntu',_0x13243b(0x1ee),'20.0.04'],'auth':{'creds':state[_0x13243b(0x1fa)],'keys':makeCacheableSignalKeyStore(state[_0x13243b(0x1fc)],pino({'level':_0x13243b(0x202)})[_0x13243b(0x208)]({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x5d7f0d=>{const _0x2a1153=_0x13243b;let _0x42cc7c=jidNormalizedUser(_0x5d7f0d[_0x2a1153(0x1f9)]),_0x265ce1=await store[_0x2a1153(0x1f2)](_0x42cc7c,_0x5d7f0d['id']);return _0x265ce1?.['message']||'';},'msgRetryCounterCache':msgRetryCounterCache,'defaultQueryTimeoutMs':undefined});store['bind'](sock['ev']);if(pairingCode&&!sock['authState'][_0x13243b(0x1fa)][_0x13243b(0x201)]){if(useMobile)throw new Error(_0x13243b(0x205));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0xb3068f=>phoneNumber[_0x13243b(0x1ec)](_0xb3068f))&&(console['log'](chalk[_0x13243b(0x209)](chalk['redBright'](_0x13243b(0x1f1)))),process['exit'](0x0))):(phoneNumber=await question(chalk[_0x13243b(0x209)](chalk[_0x13243b(0x1fd)](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0x2eeb80=>phoneNumber['startsWith'](_0x2eeb80))&&(console['log'](chalk[_0x13243b(0x209)](chalk[_0x13243b(0x207)](_0x13243b(0x1f1)))),phoneNumber=await question(chalk[_0x13243b(0x209)](chalk['greenBright'](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{const _0x489bf9=_0x13243b;let _0x8a96ab=await sock[_0x489bf9(0x1eb)](phoneNumber);_0x8a96ab=_0x8a96ab?.[_0x489bf9(0x20a)](/.{1,4}/g)?.[_0x489bf9(0x1f3)]('-')||_0x8a96ab,console['log'](chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x200)](_0x489bf9(0x20b))),chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x1ed)](_0x8a96ab)));},0xbb8);}function _0x2c06(){const _0x1bbd11=['1637373LZnyZs','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','some','redBright','child','bgBlack','match','Your\x20Pairing\x20Code\x20:\x20','1250522JShAKL','requestPairingCode','startsWith','white','Chrome','9897888veqNgu','silent','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+32460220392','loadMessage','join','3095530dIuEjy','replace','985968qabeqv','black','1465506gzUlAn','remoteJid','creds','1360236TOTwHA','keys','greenBright','4gBEQlq','2csqFkw','bgGreen','registered','fatal','Please\x20type\x20your\x20WhatsApp\x20number\x20ðŸ˜\x0aFor\x20example:\x20+32460220392\x20:\x20'];_0x2c06=function(){return _0x1bbd11;};return _0x2c06();}
// Conexión

sock.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startProo()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startProo()
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startProo()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startProo()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startProo()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startProo()
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startProo()
			} else sock.end(`Unknown DisconnectReason: ${reason}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Connecting...`, 'green'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
			await delay(1999)
            console.log(banner.string)
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji} BIEN VENIDO`,'magenta'))
            console.log(color(`${themeemoji} `,'magenta'))
            console.log(color(` `,'magenta'))
                        console.log(color(`< ================================================== >`, 'cyan'))
            console.log(color(`${themeemoji} Creador Oficial de la base`,'magenta'))
            console.log(color(`${themeemoji} joel\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startProo();
	}
})
sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = args.join(' ')
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 
 
 // CONSTANTES NUEVAS
 
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
 
 // RESPUESTAS AUTOMATICAS
 const respuesta = {
 espere : "Espere un momento porfavor",
 dono : " este comando es solo usado por mi creador",
 premiun: "compre la version premiun",
 grupos : "este comando es solo para grupos",
 privado : " 🕵‍♂️*Este comando solo se puede usar en el chat privado*",
 error : " ⚠️ *Lo siento ocurrio un error, intentelo de nuevo Porfavor*",
 textito : "😤 *Digita un texto Porfavor* ",
 }
 
// MENSAJES EN CONSOLA 
 
 if (isGroup) {
if (isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'green')}\n${color('┃', 'green')} ${color('Número:', 'green')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'green')} ${color('Nombre:', 'green')} ${color(pushname, 'white')}\n${color('┃', 'green')} ${color('Horário:', 'green')} ${color(hora, 'white')}\n${color('┃', 'green')} ${color('comando:', 'green')} ${color(comando)}\n${color('┃', 'white')} ${color('Palabras:', 'green')} ${color(budy.length, 'green')}\n${color('┃', 'green')} ${color('Grupo:', 'green')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'green')}`)
 if (!isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'green')}\n${color('┃', 'green')} ${color('Número:', 'green')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'green')} ${color('Nombre:', 'green')} ${color(pushname, 'white')}\n${color('┃', 'green')} ${color('Horário:', 'green')} ${color(time, 'white')}\n${color('┃', 'green')} ${color('comando:', 'green')} ${color('No', 'white')}\n${color('┃', 'green')} ${color('Palabras:', 'green')} ${color(budy.length, 'white')}\n${color('┃', 'green')} ${color('Grupo:', 'green')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'green')}`)
}
 
 //otros constantes 
 const ale = Math.floor(Math.random()*1000);
 //dias
 let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
 //dias
 
 //horas
 let tm = new Date();
let hours = tm.getHours().toString().padStart(2, '0');
let minutes = tm.getMinutes().toString().padStart(2, '0');
let seconds = tm.getSeconds().toString().padStart(2, '0');
 
 //horas
 
 
 function formatUptime(uptimeInSeconds) {
  let seconds = uptimeInSeconds;
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * 60 * 60;
  const minutes = Math.floor(seconds / 60);

  let uptimeFormatted = "";

  if (days > 0) {
    uptimeFormatted += `${days} día`;
    if (days > 1) {
      uptimeFormatted += "s";
    }
  }

  if (hours > 0) {
    uptimeFormatted += ` ${hours} hora`;
    if (hours > 1) {
      uptimeFormatted += "s";
    }
  }

  if (minutes > 0) {
    uptimeFormatted += ` ${minutes} minuto`;
    if (minutes > 1) {
      uptimeFormatted += "s";
    }
  }

  return uptimeFormatted.trim();
}

const uptimeInSeconds = process.uptime();
const uptimeFormatted = formatUptime(uptimeInSeconds);
 
// otros constantes 


const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
 
 // otros const
 
 const minumero = '+51 957757804';
 

switch(comando) {

case "menu":


enviar("[𝙼𝚃]: 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾✅")

sock.sendMessage(from, { react: { text: '📚', key: info.key }});

const menu = (`
◈ ━━━━━ *YOMIBOT  ┃ ᴮᴼᵀ* ━━━━━ ◈
*USER* : @${pushname}
*FECHA* : HOY ES ${year}-${month}-${day}
*HORA*: *SON LAS* ${hours}:${minutes}:${seconds}
*CREADOR*: ʲᵒᵉˡ.ˣʸᶻ ˢᵃˡᵘᵈᵃᵐᵉ ᵐⁱ ᵃᵐᵒʳ
*ACTIVO*: ${uptimeFormatted}
                               
          *𝚏𝚛𝚊𝚌𝚎 𝚛𝚎𝚏𝚕𝚎𝚡𝚒𝚟𝚊*:
          
          ᗴᒪ ᐯᗴᖇᗪᗩᗪᗴᖇO ᗴ᙭ITO ᑎO Տᗴ ᗰIᗪᗴ ᑭOᖇ ᒪO ᑫᑌᗴ TIᗴᑎᗴՏ, ՏI ᑎO ᑭOᖇ ᒪO ᑫᑌᗴ ᕼᗩՏ ՏᑌᑭᗴᖇᗩᗪO ᑭᗩᖇᗩ ᒪᒪᗴᘜᗩᖇ ᗩᒪᒪÍ
                         ʲᵒᵉˡ.ˣʸᶻ
          
          
                               
                        *𝙼𝙴𝙽𝚄*                                                            
 ┌─⊷ *inteligencia artificial*
▢ .chatgpt
▢ .ia
 └──                                
┌─⊷ *ERRORES*
▢ .error
└──    

┌─⊷ *GRUPOS*
▢ .notify + texto
▢ .invocar + texto
▢ .add
▢ .kick
▢ .demote
▢ .promote
▢ .creador
└───────────

┌─⊷ *DISEÑOS*
▢ .diseños
▢ .diseños2
▢ .diseños3
▢ .diseños4
└───────────

┌─⊷ *BOT*
▢ .canal
▢ .infobot
▢ .grupos
▢ .estado
▢ .tenerbot
└───────────

┌─⊷ *JUEGOS*
▢ .w 
▢ .slot
▢ .ppt (elije, piedra, papel, tijera)
▢ .dado
▢ .robar
▢ .violar
▢ .pruebagey
▢ .pruebaputa
▢ .pruebapajero
▢ .cuantomemide
▢ .pruebamariguano
▢ .verdad
▢ .reto
└───────────

┌─⊷ *FRACES*
▢ .fracedeldia
▢ .fraces
└───────────

┌─⊷ *TOP*
▢ .topputas
▢ .topgey
▢ .toppajeros
▢ .topgrasa
▢ .toplindos
▢ .topfamosos
└───────────
ᶜᵒᵖʸʳⁱᵍᵗʰ-ʲᵒᵉˡ.ˣʸᶻ-²⁰²⁴-²⁰²⁵

`)
await sock.sendMessage(from, {image:  fs.readFileSync('./Media/Fotos/menux.jpg'), caption: menu, contextInfo: {
                externalAdReply: {
                title:"-  yomi | joel.xyz",
                body: "joel.xyz",
                reviewType: "PHOTO", 
                thttps: `//telegra.ph/file/42f047df90ed7e69aa429.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vadng832kNFqlsaKL30W`,
                mediaType: 2
                }}});
       sock.sendMessage(from, { react: { text: '✅', key: info.key }});
                
  sock.sendMessage(from, { react: { text: '✅', key: info.key }});
  break
  
  
  case "estado":
  enviar(`
  ┌─⊷ *ESTADO*
▢ : ACTIVO ✅
▢ : TIEMPO: ${uptimeFormatted}
▢ : FECHA: ${year}-${month}-${day}
▢ : HORA: ${hours}:${minutes}:${seconds}
▢ : USER: @${pushname}
└───────────
  
  
  `)
  break;
  case "verdad":
  const verdad = ["𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿Qué cosas infantiles sigues haciendo?*", "𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¡Descríbete en una palabra!*","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿Alguna vez has sido amor no correspondido? ¿Si has estado con quién? ¿Cómo se siente brou?*","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿que fue lo mas vergonzoso que te pasó en la escuela?*", "𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿alguna vez as rechazado a alguien?* *¿por qué?*","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿que es lo mas desagradable que as experimentado?*","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n*¿eres virgen?* *responde solo con si, o no*","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n¿𝙲𝚞𝚊𝚗𝚍𝚘 𝚏𝚞𝚎 𝚕𝚊 𝚞𝚕𝚝𝚒𝚖𝚊 𝚟𝚎𝚣 𝚚𝚞𝚎 𝚝𝚎 𝚋𝚊𝚗̃𝚊𝚜𝚝𝚎?","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n¿𝚊𝚕𝚐𝚞𝚗𝚊 𝚟𝚎𝚣 𝚝𝚞 𝚙𝚊𝚛𝚎𝚓𝚊 𝚃𝚎 𝚏𝚞𝚎 𝚒𝚗𝚏𝚒𝚎𝚕?, ¿𝚌𝚘𝚗 𝚚𝚞𝚒𝚎𝚗? , ¿𝚚𝚞𝚎 𝚜𝚎𝚗𝚝𝚒𝚜𝚝𝚎?","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n¿𝙲𝙾𝙼𝙾 𝚂𝙴 𝙻𝙻𝙰𝙼𝙰𝙱𝙰 𝚃𝚄 𝙿𝚁𝙸𝙼𝙴𝚁𝙰 𝙿𝙰𝚁𝙴𝙹𝙰?, ¿𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁𝙾𝙽? 𝚈 𝚂𝙸 𝙴𝚂 𝙰𝚂𝙸 ¿𝙿𝙾𝚁 𝚀𝚄𝙴?","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n¿𝙲𝚄𝙰𝙽𝙳𝙾 𝙵𝚄𝙴 𝙻𝙰 𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚉 𝚀𝚄𝙴 𝚃𝚄 𝙼𝙰𝙼𝙰 ̄𝚃𝙴 𝚂𝙰𝙲𝙾́𝙻𝙰 𝙿𝚄𝚃𝙰? ¿𝙿𝙾𝚁 𝚀𝚄𝙴?","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n¿𝙰𝙻𝙶𝚄𝙽𝙰 𝚅𝙴𝚉 𝙿𝙴𝙽𝚂𝙰𝚂𝚃𝙴  𝙴𝙽 𝙼𝙰𝚃𝙰𝚁 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽? ¿𝙿𝙾𝚁 𝚀𝚄𝙴?","𝚈𝙾𝙼𝙸-𝙱𝙾𝚃\n\n𝙰 𝚀𝚄𝙴 𝙴𝙳𝙰𝙳 𝚃𝚄𝚅𝙸𝚂𝚃𝙴 𝚃𝚄 𝙿𝚁𝙸𝙼𝙴𝚁𝙰 𝙿𝙰𝚁𝙴𝙹𝙰?, ¿𝙲𝙾𝙼𝙾 𝚂𝙴 𝙻𝙻𝙰𝙼𝙰?","*¿ya te chuparon la verga?*","*ya no tengo más verdades para ti*",]

const verdade = verdad[Math.floor(Math.random()*verdad.length)]

enviar(verdade)
  break;
  
  
case "reto":
case "retos":
const retos = [`❥︎ ${pushname}\n\n✔︎𝙼𝙰𝙽𝙳𝙰 𝙻𝙰 𝙿𝚁𝙸𝙼𝙴𝚁𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝚃𝚄 𝙶𝙰𝙻𝙴𝚁𝙸𝙰`,`❥︎${pushname}\n\n✔︎ 𝙼𝙰𝙽𝙳𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙱𝙰𝙸𝙻𝙰𝙽𝙳𝙾ʕ•ᴥ•ʔ`,`❥︎ ${pushname}\n\n✔︎𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝚃𝙴 𝙰 𝚃𝚄 𝙲𝚁𝚄𝚂𝙷`,`❥︎${pushname}\n\n✔︎𝚂𝚄𝙱𝙴 𝚄𝙽 𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙸𝙲𝙸𝙴𝙽𝙳𝙾 𝚀𝚄𝙴 𝚃𝙴 𝙰𝙲𝙰𝙱𝙰𝚂 𝙳𝙴 𝙲𝙰𝙶𝙰𝚁`,`❥︎${pushname}\n\n✔︎𝙳𝙸 𝙰𝙻𝙶𝙾 𝚀𝚄𝙴 𝙽𝙾 𝙴𝚇𝙸𝚂𝚃𝙰 𝚈 𝚀𝚄𝙴 𝙽𝚄𝙽𝙲𝙰 𝙴𝚇𝙸𝚂𝚃𝙸𝚁𝙰`,`❥︎${pushname}\n\n✔︎𝚃𝙸𝚁𝙰𝚃𝙴 𝚄𝙽𝙰 𝙿𝙰𝙹𝙰 𝙵𝚁𝙴𝙽𝚃𝙴 𝙰 𝚃𝚄 𝙿𝙰𝚁𝙴𝙹𝙰`,`❥︎${pushname}\n\n✔︎𝙼𝙰𝙽𝙳𝙰 𝚄𝙽𝙰 𝙵𝙾𝚃𝙾 𝚃𝚄𝚈𝙰`, `❥︎${pushname}\n\n✔︎𝙰𝚂 𝙰𝙻𝙶𝙾 𝚃𝙾𝙽𝚃𝙾 𝙵𝚁𝙴𝙽𝚃𝙴 𝙰 𝚃𝚄𝚂 𝙿𝙰𝙳𝚁𝙴𝚂`,`❥︎${pushname}\n\n✔︎𝙼𝙰𝙽𝙳𝙰 𝚄𝙽𝙰 𝙵𝙾𝚃𝙾 𝙷𝙾𝚃`,`❥︎𝙶𝚁𝙰𝙱𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙶𝙸𝙼𝙸𝙴𝙽𝙳𝙾`, `*ya no tengo mas retos* *para ti* ${pushname}`, `♡ ${pushname}\n\n*enviale un mensajes a tus padres "MAMÁ , PAPÁ YA SE QUE SOY UN NIÑO ADOPTADO`, `♡ ${pushname}\n\n*come algo pero no uses las manos*`, `♡ ${pushname}\n\n*llama a tu mamá* *y dile* *"me quiero casar lo antes posible"*` , `♡ ${pushname}\n\n*invita a personas que no conozcas* *a tomarse una selfi contigo* *y mandalo al grupo*`];
const mere = retos[Math.floor(Math.random() * retos.length)];
enviar(mere);
break
  
  
  case "error":
  enviar(`
  *ERRRORES COMUNES*:
  
  
  *1: YOMI NO RESPONDE EN GRUPOS*
  
  SOLUCIÓN: FUNCIONA EN PRIVADO, O ESPERA A QUE QUIERA RESPONDER
  
   *2: YOMI NO RESPONDE NI EN PRIVADO NI EN GRUPOS*
   
   SOLUCIÓN: ESPERAR A QUE EL DESARROLLADOR LO REINICIE
   
   *3: EL COMANDO IA NO FUNCIONA*
   
   SOLUCION: FATA DE INTERNET, ESPERA A QUE EL BOT TENGA ACCESO A INTERNET
   
   *4: NO SE VEN LOS MENSAJES*
   SOLUCIÓN: EVITA ENVIAR 100000 MENSAJES EN SEGUNDOS
 `)
  break
  
  
  
  case "grupos":
  case "grupo":
  
const grupos = (`
     𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 
              (•̀ᴗ•́)و
              
𝐺𝑅𝑈𝑃𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 𝐷𝐸𝐿 𝐵𝑂𝑇:\nchat.whatsapp.com/Kd6TrPSMNS16kcTbOGqCkD
            
            
YOMI-BOT-CANAL:\nwhatsapp.com/channel/0029Vadng832kNFqlsaKL30W



¿𝚝𝚞 𝚐𝚛𝚞𝚙𝚘 𝚗𝚘 𝚜𝚎 𝚎𝚗𝚌𝚞𝚎𝚗𝚝𝚛𝚊?🙀 𝚚𝚞𝚎 𝚎𝚜𝚙𝚎𝚛𝚊𝚜 𝚙𝚊𝚛𝚊 𝚎𝚗𝚟𝚒𝚊𝚛𝚖𝚎𝚕𝚘
`)
  await sock.sendMessage(from, {image:  fs.readFileSync('./Media/Fotos/canal.jpg'), caption: grupos, contextInfo: {
                externalAdReply: {
                title:"-  yomi | joel.xyz",
                body: "joel.xyz",
                reviewType: "PHOTO", 
                thttps: `//telegra.ph/file/42f047df90ed7e69aa429.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vadng832kNFqlsaKL30W`,
                mediaType: 2
                }}});
       sock.sendMessage(from, { react: { text: '✅', key: info.key }});
                break
  
  
  


  
  
  
  
 case "canal":
 
 sock.sendMessage(from, { react: { text: '😍', key: info.key }});
 
const canal = (`
┌─⊷ *𝑺𝑰𝑮𝑼𝑬𝑵𝑶𝑺 𝑬𝑵 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷*
▢𝚄𝚂𝙴𝚁: ${pushname}
▢𝙲𝙰𝙽𝙰𝙻: whatsapp.com/channel/0029Vadng832kNFqlsaKL30W
└───────────
  `)
  await sock.sendMessage(from, {image:  fs.readFileSync('./Media/Fotos/canal.jpg'), caption: canal, contextInfo: {
                externalAdReply: {
                title:"-  yomi | joel.xyz",
                body: "joel.xyz",
                reviewType: "PHOTO", 
                thttps: `//telegra.ph/file/42f047df90ed7e69aa429.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vadng832kNFqlsaKL30W`,
                mediaType: 2
                }}});
       sock.sendMessage(from, { react: { text: '✅', key: info.key }});
                
  
  
  break
  
  
case "infobot":
case "info":
enviar(`
┌─⊷ *INFO*
▢𝚄𝚂𝙴𝚁: ${pushname}
▢𝙻𝙸𝙱📗: 𝙱𝚊𝚒𝚕𝚎𝚢𝚜
▢𝙶𝚁𝙾𝚄𝙿: 𝙽𝚄𝙻𝙻
▢𝚄𝚂𝙴𝚁𝚂: 172
▢𝚊𝚌𝚝𝚒𝚟𝚘: ${uptimeFormatted}
└───────────
`)
break
 
 
 
case "serbot":
case "code":
case "jadibot":
enviar(`${pushname} 𝚎𝚜𝚝𝚎 𝚋𝚘𝚝 𝚎𝚜𝚝𝚊 𝚎𝚗 𝚍𝚎𝚜𝚊𝚛𝚛𝚘𝚕𝚕𝚘☺️, 𝚙𝚘𝚛 𝚕𝚘 𝚚𝚞𝚎 𝚊𝚞𝚗 𝚗𝚘 𝚝𝚒𝚎𝚗𝚎 𝚕𝚊 𝚏𝚞𝚗𝚌𝚒𝚘𝚗 .𝚜𝚎𝚛𝚋𝚘𝚝, *esperamos su comprensión.*\n\nATT: ʲᵒᵉˡ.ˣʸᶻ  `)
break
  
  
case "fracedeldia":
case "fracedeldía":
const refle = [
"La felicidad no es algo que encuentres al final del camino, ¡es el camino mismo!",
"A veces, la mayor aventura es simplemente un momento de silencio contigo mismo.",
"Cada día es una nueva oportunidad para ser quien realmente quieres ser.",
"Las sonrisas son contagiosas, así que asegúrate de contagiar muchas.",
"No hay problema que no pueda ser superado con un poco de positividad y determinación.",
"El verdadero éxito no se mide por lo que tienes, sino por lo que has superado para llegar allí.",
"El amor propio es el mejor tipo de amor. Cuídate a ti mismo tanto como cuidas a los demás.",
"A veces, las cosas más pequeñas ocupan el mayor espacio en nuestros corazones.",
"La vida es como una cámara: enfócate en lo importante, captura los buenos momentos, saca lo negativo y, si no funciona, ¡inténtalo de nuevo!",
"Nunca subestimes el poder de una buena conversación con alguien que te entiende.",]

const frac = refle[Math.floor(Math.random()*refle.length)]

enviar(`${pushname} 𝚏𝚛𝚊𝚌𝚎 𝚍𝚎𝚕 𝚍𝚒𝚊:\n\n ` + frac)
  break;
  
 
  

case "fraces":

const fra = [
"Eres la luz que ilumina mi camino.",
"Cada momento a tu lado es un regalo que atesoro.",
"En tu sonrisa encuentro mi felicidad.",
"Eres mi refugio en medio de la tormenta.",
"Contigo, el amor se vuelve eterno.",
"Tus abrazos son mi lugar favorito en el mundo.",
"Eres la melodía que llena mi corazón de alegría.",
"Te amo más de lo que las palabras pueden expresar.",
"A tu lado, cada día es una aventura maravillosa.",
"Eres mi sueño hecho realidad."]

const frace = fra[Math.floor(Math.random()*fra.length)]

enviar(`${pushname} 𝐴 𝑞𝑢𝑖 𝑡𝑖𝑒𝑛𝑒𝑠 𝑢𝑛𝑎 𝑓𝑟𝑎𝑐𝑒\n\n\n ` + frace + ` \n\n\n 𝑒𝑠𝑐𝑟𝑖𝑏𝑒 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 "𝑓𝑟𝑎𝑐𝑒s" 𝑝𝑎𝑟𝑎 𝑟𝑒𝑐𝑖𝑏𝑖𝑟 𝐟𝐫𝐚𝐜𝐞𝐬 𝐚𝐥𝐞𝐚𝐭𝐨𝐫𝐢𝐨𝐬`)

break;


case "diseños":
case "diseño":
var xd = [`༒︎༄${pushname}༄༒︎`,`✞᯾${pushname}᯾✞︎`,`༒︎✞︎༒︎${pushname}༒︎✞︎༒︎`,`༆✪${pushname}✪༆`,`𓇽𖤍${pushname}𓇽𖤍`,`❦︎𖣘༄${pushname}𖣘༆❦︎`,`ت︎ఌ︎ت︎ꨄ︎ ༒︎✞︎༄༆`,`𓅓✞︎༄${pushname}𓅓⍟✞︎`,]
const dise = xd[Math.floor(Math.random()*xd.length)]
enviar(`𝙰 𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙳𝙸S𝙴𝙽̃𝙾𝚂 𝙿𝙰𝚁𝙰 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴 \n\n ${dise}`)

break;


case "diseño2":
case "diseños2":
var cala = ["⌫","✞︎","🝮︎︎︎︎︎︎︎"]
var ca = ["᯾","༆","𖤍","𖣘"]
var ca1 = ["༒︎","シ︎︎","❦︎"]
var ca2 = ["𓇽","ت︎","༄","߷","ت︎"]
var dip = ["ఌ︎","ꨄ︎","シ︎","Ꙭ","ت︎"]


var cap = dip[Math.floor(Math.random()*dip.length)]
var caca = ca2[Math.floor(Math.random()*ca2.length)]
var cupo = ca1[Math.floor(Math.random()*ca1.length)]
var calo = cala[Math.floor(Math.random()*cala.length)]
var ce = ca[Math.floor(Math.random()*ca.length)]
enviar(`${calo}${cupo}${cap} ${pushname} ${cap}${ce}${caca}`)



break

case "diseño3":
case "diseños3":

var ultra = [`இ๛ﺳ${pushname}๛ڛஇ`, `✿↭۵*:•${pushname}•:۵↭❀`, `๛๛✐இ${pushname}இ✎๛๛`, `ஐ↝⊗┊${pushname}┊⊗↜ஐ`, `ツ๛ڛ${pushname}๛ڛシ`, ]

var ultre = ultra[Math.floor(Math.random()*ultra.length)]
enviar(ultre)

break;



case "diseños4":
case "diseño4":

var disp = [`漫~*'¨¯¨'*·舞~ ${pushname} ~舞*'¨¯¨'*·~漫-`, `...::!:: ${pushname}  ::!::...`, `•°•╬╬• ${pushname}  •╬╬•°•`, `¦₪¦╣• ${pushname}  •╠¦₪¦`, `۞ ${pushname} ۞ `, `•¯» ${pushname}  «•¯•` , `¨˜°ºð ${pushname}  ðº°˜¨`, `*¤®§(*§ ${pushname}  §*)§®¤*`,]

var bacan = disp[Math.floor(Math.random()*disp.length)]
enviar(bacan)
break;



case "dado":
var dados = ["🎲", "🎲🎲", "🎲🎲🎲", "🎲🎲🎲🎲", "🎲🎲🎲🎲🎲", "🎲🎲🎲🎲🎲🎲"]
var ja = dados[Math.floor(Math.random()*dados.length)]


  
if(ja === "🎲" || ja === "🎲🎲🎲🎲🎲🎲"){

enviar(`${pushname} [𝙼𝚃] 𝙶𝚊𝚗𝚊𝚜𝚝𝚎, 𝚎𝚕 𝚍𝚊𝚍𝚘 𝚜𝚊𝚕𝚒𝚘 𝚎𝚗 ` + ja + ` 𝕥𝕠𝕞𝕒 𝕞𝕒́𝕤 ` + ale + ` 𝑠𝑜𝑙𝑒𝑠`)
}

else{
enviar("> PERDISTE EL DADO CAYÓ EN " + ja + "*para ganar el dado debe caer en 1 o 6*")

}
break;


case "w":
case "trabajar":
const tra = [`trabajas como secuestrador de novias y ganas `, ` ayudaste a programar Yomibot-md, por todo eso te pagaron  `, `ayudaste a moderar el grupo de Yomibot-md y te pagan ` , `¿por que este comando se llama trabajar? no estas haciendo nada relacionado con el trabajo sin embargo ganas `, ` ¿alguna vez te pagaron sin que ayas echo nada? , pues  esta vez ganas ` , `trabajas limpiando patios y ganas `, `vendes cosas innecesarias de tu casa , todo eso valía ` , ]
const un = tra[Math.floor(Math.random()*tra.length)]

enviar(`${pushname} ` + un + " +"  + ale + " 𝐅𝐞𝐥𝐢c𝐢𝐝𝐚𝐝𝐞𝐬")


break


case "cuantomemide":

const hijo = Math.floor(Math.random()*21)

if( hijo > 5){
enviar(`${pushname} 𝚝𝚎 𝚖𝚒𝚍𝚎 ${hijo}𝚌𝚖 𝚊𝚕𝚐𝚘 𝚎𝚜 𝚊𝚕𝚐𝚘😏`)
}

else if(hijo < 5){
enviar(`${pushname} 𝚝𝚎 𝚖𝚒𝚍𝚎 ${hijo}𝚌𝚖 𝚎𝚜 𝚖𝚞𝚢 𝚙𝚎𝚚𝚞𝚎𝚗̃𝚘😹🤏🍆`)

}

if(hijo === 5){
enviar(`@${pushname} 𝚝𝚎 𝚖𝚒𝚍𝚎 ${hijo}cm 𝚚𝚞𝚎 𝚗𝚘 𝚎𝚜 𝚕𝚊 𝚐𝚛𝚊𝚗 𝚌𝚘𝚜𝚊 𝚙𝚎𝚛𝚘 𝚋𝚞𝚎𝚗𝚘😐`)
}

else if(hijo === 0){
enviar(` ${pushname} 𝚝𝚎 𝚖𝚒𝚍𝚎 ${hijo}𝚌𝚖 😹😹😹😹😹 𝚝𝚎 𝚚𝚞𝚎𝚍𝚊𝚜𝚝𝚎 𝚜𝚒𝚗 𝚙𝚒𝚕𝚒𝚗😹`)
}
break;




case "creador":
case "owner":

const creador = (`
               🎖️𝑶𝑾𝑵𝑬𝑹🎃
         ┌─⊷⊷⊷⊷⊷⊷⊷⊷⊷⊷⊷
           wa.me/51957757804
         └───────────
         `)
await sock.sendMessage(from, {image:  fs.readFileSync('./Media/Fotos/owner.jpg'), caption: creador, contextInfo: {
                externalAdReply: {
                title:"-  yomi | joel.xyz",
                body: "porno es broma Suscribete a mi canal😐",
                reviewType: "PHOTO", 
                thttps: `//telegra.ph/file/42f047df90ed7e69aa429.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vadng832kNFqlsaKL30W`,
                mediaType: 2
                }}});
       sock.sendMessage(from, { react: { text: '✅', key: info.key }});
           
 
break;


case "slot":
const frutas = [

"🥭:🍊:🍎",
"🍇:🍌:🥭",
"🥭:🍊:🍎",
"🍇:🍌:🥭",
"🍅:🍇:🍇",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍆:🍏:🍏",
"🍅:🥭:🍊",
"🍌:🍌:🍌",
"🍇:🍇:🍇",
"🥭:🥭:🥭",
"🍅:🍊:🍎",
"🍇:🍌:🥭",
"🍇:🍑:🍇",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍏:🍇:🍏",
"🍅:🍅:🍊",
"🍌:🍌:🍌",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍏:🍏:🍏",
"🍅:🍌:🍊",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍆:🍏:🍏",
"🍅:🥭:🍊",
"🍅:🍊:🍎",
"🍇:🍌:🥭",
"🍇:🍑:🍇",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍏:🍇:🍏",
"🍅:🥭:🍊",
"🍅:🍊:🍎",
"🍇:🍌:🥭",
"🍇:🍑:🍇",
"🍅:🍏:🍑",
"🌽:🥝:🥭",
"🍏:🍇:🍏",
]

const mezcla = frutas[Math.floor(Math.random()*frutas.length)];


if((mezcla == "🍏:🍏:🍏") ||
(mezcla == "🍌:🍌:🍌") ||
(mezcla == "🥭:🥭:🥭") ||
(mezcla == "🍇:🍇:🍇")) {
enviar(`𝐟𝐞𝐥𝐢𝐳𝐢𝐝𝐚𝐝𝐞𝐬 ${pushname} 𝐠𝐚𝐧𝐚𝐬𝐭𝐞, 𝐞𝐥 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨 𝐞𝐬: ` + mezcla + ` toma ` + `+` + ale)
}

else{
enviar(`𝚙𝚎𝚛𝚍𝚒𝚜𝚝𝚎 ${pushname} 𝕖𝕝 𝕣𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠 𝕗𝕦𝕖: ` + mezcla + ' 𝚙𝚒𝚎𝚛𝚍𝚎𝚜' + " -" + ale)
}
break


case "notify":
if(!q) return enviar("𝚕𝚘 𝚎𝚜𝚝𝚊𝚜 𝚞𝚜𝚊𝚗𝚍𝚘 𝚖𝚊𝚕:\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n.notify 𝙷𝙾𝙻𝙰 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙿𝙴𝚁𝚁𝙾𝚂")
sock.sendMessage(from, { text : q ? q : "DESPIERTEN CARAS DE VERGA", mentions : groupMembers.map(a => a.id) }, {info})


break

case "invocar":
case "todos":
let tekos = q
for (let mem of groupMembers) { 
tekos += `@${mem.id.split('@')[0]}\n`}


if(!q) return enviar("𝚕𝚘 𝚎𝚜𝚝𝚊𝚜 𝚞𝚜𝚊𝚗𝚍𝚘 𝚖𝚊𝚕:\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n.invocar 𝙷𝙾𝙻𝙰 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙿𝙴𝚁𝚁𝙾𝚂")
sock.sendMessage(from, { text : tekos ? tekos : "DESPIERTEN CARAS DE VERGA", mentions : groupMembers.map(a => a.id) }, {info})
break


case "chatgpt": case "ia":

sock.sendMessage(from, { react: { text: '🤖', key: info.key }});

if(!q) return enviar("𝚀𝚄𝙴 𝙿𝙰𝚂𝙾 𝙼𝙰𝚂𝚃𝙴𝚁 𝚄𝚂𝙾 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾❌\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ia ¿cuando fue la segunda guerra mundial?")
var useChatgpt = await fetchJson(`https://nuevo.minijulscitoapi.store/ias/chatgpt?texto=${q}&apikey=JULZZZ`)
const linky = useChatgpt.respuesta
 try{
 
 enviar(`Hola soy yomi-bot desarrollado por yoel:\n\n${linky}`)
} catch {
 enviar("[❗️] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴")
 }
            break
 
 
case "ppt":
  const options = ["piedra", "papel", "tijera"];
  const userChoice = args[0].toLowerCase(); // Se asume que el usuario ingresa su elección como argumento
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  let result = "";
  if (userChoice === computerChoice) {
    result = "𝐄𝐌𝐏𝐀𝐓𝐄❗ 𝐀𝐌𝐁𝐎𝐒 𝐆𝐀𝐍𝐀𝐍  " + ale + " 𝐒𝐎𝐋𝐄𝐒";
  } else if (
    (userChoice === "piedra" && computerChoice === "tijera") ||
    (userChoice === "papel" && computerChoice === "piedra") ||
    (userChoice === "tijera" && computerChoice === "papel")
  ) {
    result = "¡𝐆𝐀𝐍𝐀𝐒𝐓𝐄✅! " + " 𝐆𝐀𝐍𝐀𝐒 𝐌𝐀́𝐒 " + " +" + ale + " 𝐒𝐎𝐋𝐄𝐒" ;
  } else {
    result = "¡𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄❌! " + " -" + ale;
  }

  const message = `𝐄𝐋𝐄𝐆𝐈𝐒𝐓𝐄 ${userChoice}. 𝐘𝐔𝐌𝐈-𝐁𝐎𝐓 𝐄𝐋𝐈𝐆𝐈𝐎 ${computerChoice}. 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎: ${result}`;
  enviar(message);
  break;
 
 


case "add":
case "agregar":
if(args.length===0) return enviar(`𝔼𝕊ℂℝ𝕀𝔹𝔼 𝔼𝕃 ℕ𝕌𝕄𝔼ℝ𝕆 𝔻𝔼 𝕃𝔸 ℙ𝔼ℝ𝕊𝕆ℕ𝔸❌ 𝕖𝕛𝕖𝕞𝕡𝕝𝕠 .add +51957757804`)
if(!isGroupAdmins) return enviar("𝐧𝐨 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐪𝐮𝐞 𝐩𝐞𝐧𝐚❌")
if(!isBotGroupAdmins) return enviar("𝑁𝑂 𝑆𝑂𝑌 𝐴𝐷𝑀𝐼𝑁 :( 𝑁𝑂 𝑃𝑈𝐸𝐷𝑂 𝑨𝑵̃𝑨𝑫𝑰𝑹𝑳𝑶❌")

const culo = info.quoted ? info.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await sock.groupParticipantsUpdate(from, [culo] , 'add')

break
 

case "kick":
case "eliminar":
if(args.length===0) return enviar(`𝔼𝕊ℂℝ𝕀𝔹𝔼 𝔼𝕃 ℕ𝕌𝕄𝔼ℝ𝕆 𝔻𝔼 𝕃𝔸 ℙ𝔼ℝ𝕊𝕆ℕ𝔸❌ 𝕖𝕛𝕖𝕞𝕡𝕝𝕠 .kick +51957757804`)
if(!isGroupAdmins) return enviar("𝐧𝐨 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐪𝐮𝐞 𝐩𝐞𝐧𝐚❌")
if(!isBotGroupAdmins) return enviar("𝑁𝑂 𝑆𝑂𝑌 𝐴𝐷𝑀𝐼𝑁 :( 𝑁𝑂 𝑃𝑈𝐸𝐷𝑂 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝑅𝐿𝑂❌")

const culos = info.quoted ? info.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await sock.groupParticipantsUpdate(from, [culos] , 'remove')

break

  
 


case "bot":
const rep = ["TE AMO❤😳", "*¿𝕞𝕦𝕔𝕙𝕠 𝕓𝕠𝕥 𝕟𝕠 𝕔𝕣𝕖𝕖𝕤😬?*", "*PARATI SOLO SOY UN BOT VERDAD😔*", "*😬𝕤𝕖𝕣𝕖 𝕦𝕟 𝕓𝕠𝕥 𝕤𝕚𝕟 𝕖𝕞𝕓𝕒𝕣𝕘𝕠𝕟 𝕤𝕠𝕪 𝕞𝕖𝕛𝕠𝕣 𝕢𝕦𝕖 𝕥𝕦*", "> ¿EN QUE PUEDO AYUDARTE HOY?"]

const put= rep[Math.floor(Math.random()*rep.length)]
enviar(put)
break;





//demote

case 'demote': {
if (!isGroup) return enviar(`*ESTE COMANDO SOLO SE PUEDE USAR EN GRUPOS*`)
if (!isGroupAdmins) return enviar(`*NO ERES ADMIN DEL GRUPO, NO PUEDES REALIZAR ESTA ACCION*`)
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return enviar(`*Marque el mensaje del usuario que desea promocionar a administrador o márquelo con ${prefixo}promote @marcar*`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
sock.sendMessage(from, {text: `@${sender.split('@')[0]} a degradado a @${mentioned.split("@")[0]} a [ Miembro ].`, mentions: [mentioned,sender]},{quoted:info})
sock.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return enviar('Sólo puedes degradar a una persona a la vez...')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
sock.sendMessage(from, {text: `@${sender.split('@')[0]} a degradado a @${mentioned.split("@")[0]} a [ Miembro ].`, mentions: [mentioned2,sender]},{quoted: info})
sock.groupParticipantsUpdate(from, [mentioned2], "demote")
}
}
break

/////promover
case 'promote': {
if (!isGroup) return enviar(`*SOLO PUEDES USAR EN GRUPOS*`)
if (!isGroupAdmins) return enviar(`*NO ERES ADMIN PARA USAR ESTE COMANDO*`)
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return enviar(`Marque el mensaje del usuario que desea promocionar a administrador o márquelo con ${prefixo}promote @marcar`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
sock.sendMessage(from, {text: `@${mentioned.split("@")[0]} Consiguió el ascenso(a) para admin con éxito.`, mentions: [mentioned]},{quoted:info})
sock.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return enviar('Solo puedes promocionar a una persona a la vez...')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
sock.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Fuiste ascendido a [ ADMINISTRADOR ] con éxito.`, mentions: [mentioned2]},{quoted:info})
sock.groupParticipantsUpdate(from, [mentioned2], "promote")}
}
break



case "toppajeros":
case "toppajero":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*PAJAS*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `😂𝕡𝕦𝕥𝕠𝕤 𝕡𝕒𝕛𝕖𝕣𝕠𝕤: @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;







case "topputas":
case "toputo":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*PUTOS*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `😂𝚙𝚞𝚝𝚒𝚝@𝚜: @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;


case "topgrasa":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*QUIEN QUIERE VIOLAR A ESTOS GEYS👇*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `*TOP GRASA🤨*️‍ : @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;



case "topguapos":
case "toplindos":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*QUIEN QUIERE VIOLAR A ESTOS GEYS👇*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `*LINDO*️‍ 🥵: @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;


case "topfamoso":
case "topfamosos":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*QUIEN QUIERE VIOLAR A ESTOS GEYS👇*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `*FAMOSO*️‍ 🤑: @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;


case "topgey":
case "topgay":
  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");

  try {
    let d = [];
    let red = '*QUIEN QUIERE VIOLAR A ESTOS GEYS👇*';
    let ret = '';

    for (let i = 0; i < 5; i++) {
      const r = Math.floor(Math.random() * groupMetadata.participants.length);
      console.log(`index: ${r}`);
      console.log(`Participants length: ${groupMetadata.participants.length}`);

      if (groupMetadata.participants[r]) {
        console.log(`Mention found for index: ${r}`);
        const participantId = groupMetadata.participants[r].id.split('@')[0];
        ret += `𝙶𝙴𝚈🏳️‍🌈: @${participantId}\n`;
        d.push(participantId);
      } else {
        console.log(`no mentions found for index ${r}`);
      }
    }

    console.log('Final ret:', ret);
    enviar(ret);
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;







case "pruebapajero":
enviar("*CALCULANDO. . . *")

const pjs = Math.floor(Math.random()*201)

if(pjs > 100){
enviar(`@${pushname} 𝚎𝚛𝚎𝚜 ${pjs}% 𝚙𝚊𝚓𝚎𝚛𝚘 𝚜𝚒 𝚝𝚎 𝚕𝚊 𝚜𝚒𝚐𝚞𝚎𝚜 𝚓𝚊𝚕𝚊𝚗𝚍𝚘 𝚊 𝚎𝚜𝚎 𝚙𝚘𝚛𝚌𝚎𝚗𝚝𝚊𝚓𝚎, 𝚜𝚎 𝚝𝚎 𝚟𝚊 𝚜𝚊𝚕𝚒𝚛 𝚎𝚕 𝚙𝚒𝚕𝚒𝚗😹`)

}

else if(pjs < 99){
enviar(` @${pushname} 𝚎𝚛𝚎𝚜 ${pjs}% 𝚙𝚊𝚓𝚎𝚛𝚘 𝚎𝚜𝚎 𝚙𝚘𝚛𝚌𝚎𝚗𝚝𝚊𝚓𝚎 𝚎𝚜 𝚋𝚊𝚓𝚘😁 𝚖𝚒 𝚛𝚎𝚌𝚘𝚖𝚎𝚗𝚍𝚊𝚌𝚒𝚘𝚗 𝚎𝚜 𝚚𝚞𝚎 𝚗𝚘 𝚝𝚎 𝚕𝚊 𝚓𝚊𝚕𝚎𝚜 𝚖𝚞𝚌𝚑𝚘`)
}
break;



case "pruebamariguano":
case "pruebamarihuano":

const mar = Math.floor(Math.random()*301)

if( mar <= 100){
enviar(`@${pushname} 𝚎𝚛𝚎𝚜 𝚞𝚗 ${mar}% 𝚖𝚊𝚛𝚒𝚑𝚞𝚊𝚗𝚘,  𝚍𝚎𝚟𝚎𝚜 𝚍𝚎𝚓𝚊𝚛 𝚕𝚊𝚜 𝚍𝚛𝚘𝚐𝚊𝚜😄 𝚎𝚜𝚎 𝚙𝚘𝚛𝚌𝚎𝚗𝚝𝚊𝚓𝚎 𝚎𝚜 𝚋𝚊𝚓𝚘`)
}

else if( mar > 100){
enviar(`@${pushname} , 𝚎𝚛𝚎𝚜 𝚞𝚗 ${mar}% 𝚖𝚊𝚛𝚒𝚑𝚞𝚊𝚗𝚘, 𝚗𝚘 𝚑𝚊𝚢 𝚖𝚊𝚗𝚎𝚛𝚊 𝚍𝚎 𝚚𝚞𝚎 𝚍𝚎𝚓𝚎𝚜 𝚍𝚎 𝚍𝚛𝚘𝚐𝚊𝚛𝚝𝚎😹`) 
}
break;

case "pruebagey":
case "pruebagay":
enviar("𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐍𝐃𝐎 𝐏𝐎𝐑𝐂𝐄𝐍𝐓𝐀𝐉𝐄✅")
enviar("10%")

enviar("25%")



const pruge = Math.floor(Math.random()*101)
enviar(` ${pushname} 𝙻𝙰 𝙿𝚁𝙾𝙱𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳 𝙳𝙴 𝚀𝚄𝙴 𝚃𝚄 𝚂𝙴𝙰𝚂 𝙶𝙴𝚈  𝙴𝚂 𝚄𝙽 ${pruge}% 🏳️‍🌈`)
break;



case "pruebaputa":
enviar("𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐍𝐃𝐎 𝐏𝐎𝐑𝐂𝐄𝐍𝐓𝐀𝐉𝐄✅")
enviar("10%")

enviar("25%")



const 𝚙𝚝𝚘 = Math.floor(Math.random()*101)
enviar(` ${pushname} 𝙻𝙰 𝙿𝚁𝙾𝙱𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳 𝙳𝙴 𝚀𝚄𝙴 𝚃𝚄 𝚂𝙴𝙰𝚂 *𝚙𝚞𝚝𝚊*  𝙴𝚂 𝚄𝙽 ${𝚙𝚝𝚘}% ️‍🤯𝚍𝚎𝚟𝚎𝚛𝚒𝚊𝚖𝚘𝚜 𝚟𝚒𝚘𝚕𝚊𝚛𝚝𝚎`)
break;





case "robar":


  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");
  try {
    let d = [];
    let red = '*se acaban de robar a  A ESTE👇*';
    let ret = '';
    const r = Math.floor(Math.random() * groupMetadata.participants.length);
    console.log(`index: ${r}`);
    console.log(`Participants length: ${groupMetadata.participants.length}`);
    if (groupMetadata.participants[r]) {
      console.log(`Mention found for index: ${r}`);
      const participantId = groupMetadata.participants[r].id.split('@')[0];
      ret = `*acabas de robar* a ️‍: @${participantId}\n
      
      ROBASTE: ` + `+`+ ale + ` yomicoins` ;
      d.push(participantId);
    } else {
      console.log(`no mentions found for index ${r}`);
    }
    enviar(ret)
    console.log('Final ret:', ret);
    
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;


  
  
  

case "follar":
case "violar":

  if (!isGroup) return enviar("𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂");
  try {
    let d = [];
    let red = '*FOLLADA*';
    let ret = '';
    const r = Math.floor(Math.random() * groupMetadata.participants.length);
    console.log(`index: ${r}`);
    console.log(`Participants length: ${groupMetadata.participants.length}`);
    if (groupMetadata.participants[r]) {
      console.log(`Mention found for index: ${r}`);
      const participantId = groupMetadata.participants[r].id.split('@')[0];
      ret = `*TE ACABAS DE FOLLAR A LA PERRA DE* ️: @${participantId}\n *EN 4 PATAS*
      *MIENTRAS TE GEMIA LA BIEN PERRA* 🥵 *Ahhh!! ahhh!*  *Y TE VENISTE DENTRO DE ELLA Y LA DEJASTE UN DÍA SIN CAMIBAR* ` ;
      d.push(participantId);
    } else {
      console.log(`no mentions found for index ${r}`);
    }
    enviar(ret)
    console.log('Final ret:', ret);
    
  } catch (e) {
    console.log(e);
    enviar("*ERROR VUELVA A INTENTARLO, SI ESTO PERSISTE REPÓRTALO AL CREADOR*");
  }
  break;


case "tenerbot":
enviar(`

𝑯𝑬𝒀 ${pushname}, ¿𝑇𝐸 𝐺𝑈𝑆𝑇𝐴𝑅𝐼𝐴  𝑇𝐸𝑁𝐸𝑅 𝑇𝑈 𝑃𝑅𝑂𝑃𝐼𝑂 𝐵𝑂𝑇  𝚈 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝚁𝙻𝙾 𝙰 𝚃𝚄 𝙶𝚄𝚂𝚃𝙾?

¡𝚀𝚄𝙴 𝙴𝚂𝙿𝙴𝚁𝙰𝚂❗!  ¡𝙲𝙾𝙼𝙿𝚁𝙰  𝙱𝙰𝚂𝙴 𝙳𝙴 𝒀𝑶𝑴𝑰-𝑩𝑶𝑻 𝚢 𝙰𝚂 𝚃𝚄𝚂 𝙿𝚁𝙾𝙿𝙸𝙾𝚂 𝙱𝙾𝚃𝚂  𝙰 𝚃𝚄 𝙶𝚄𝚂𝚃𝙾 𝚈 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾𝚂!

- 𝙱𝙰𝚂𝙴𝚂 𝙲𝙾𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙸𝙽𝙲𝙻𝚄𝙸𝙳𝙾𝚂 ✅
- 𝙱𝙰𝚂𝙴𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙽𝚄𝙴𝚅𝙾 𝙼𝙴𝚃𝙾𝙳𝙾 𝙳𝙴  𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 8 𝙳𝙸𝙶𝙸𝚃𝙾𝚂 ✅
- 𝙱𝙰𝚂𝙴𝚂 𝚂𝙸𝙼𝙿𝙻𝙴𝚂 ✅

 𝙲𝙾𝙽 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽  𝙸𝙽𝙲𝙻𝚄𝙸𝙳𝙰  ✅ + 𝚝𝚞𝚝𝚘𝚛𝚒𝚊𝚕𝚎𝚜
 
 PERÚ🇵🇪: 5 S/ soles
 ECUADOR🇪🇨: 1.40$ dolares
 MEXICO 🇲🇽: 10 pesos
 BRASIL🇧🇷: 5,9 reales

𝙿𝚁𝙴𝙲𝙸𝙾𝚂 𝙼𝚄𝚈 𝙲𝙾𝙼𝙾𝙳𝙾𝚂 𝙳𝙴𝚂𝙳𝙴 5 𝚂𝙾𝙻𝙴𝚂

¡𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙻𝙾𝚂 𝙿𝚁𝙴𝙲𝙸𝙾𝚂 𝙰 𝚀𝚄𝙸!👇 

wa.me/51957757804
  
  `)
  break



// COMANDOS SIN PREFIJO
default:





//Debajo del default









var gros = ["𝕐𝕆𝕄𝕀-𝕓𝕆𝕋:\n\n 𝐭𝐮𝐬 𝐜𝐨𝐦𝐞𝐧𝐭𝐚𝐫𝐢𝐨𝐬 𝐧𝐨 𝐬𝐨𝐧 𝐦𝐮𝐲 𝐚𝐦𝐢𝐠𝐚𝐛𝐥𝐞𝐬","𝒀𝑶𝑴𝑰-𝑩𝑶𝑻:\n\n 𝒊𝒏𝒕𝒆𝒏𝒕𝒆𝒎𝒐𝒔 𝒔𝒆𝒓 𝒎𝒂𝒔 𝒓𝒆𝒔𝒑𝒆𝒕𝒖𝒐𝒔os"]

const kk = gros[Math.floor(Math.random()*gros.length)]



if (budy.includes('quien es tu creador') || budy.includes('Quién es tu creador') || budy.includes('Quien es tu creador') || budy.includes('quién es tu creador')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 𝚎𝚜 𝚓𝚘𝚎𝚕.𝚡𝚢𝚜 ${pushname} 𝚝𝚎 𝚐𝚞𝚜𝚝𝚊𝚛𝚒𝚊 𝚌𝚘𝚗𝚘𝚌𝚎𝚛𝚕𝚘? <3`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}







if (budy.toLowerCase() === 'hola'){
  const message = `
   𝙷𝙾𝙻𝙰 ${pushname} 👋, soy YOMI Bot desarrollado por mi creador joel Mitma, tengo una variedad de funciones, ¿Necesitas ayuda con el Bot?

*• Funciones del bot 😉:*

- .menu *(Muestra la lista del menu)*`
  sock.sendMessage(from, { text: message }, { quoted: info });
}

if (budy.includes('Buenos días') || budy.includes('buenos dias') || budy.includes('buenos días')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n BUENOS DÍAS ${pushname} ESPERO QUE TE TENGAS UN LINDO DÍA <3`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}



if (budy.includes('gracias') || budy.includes('Gracias')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n DE NADA ${pushname} QUE TE VAYA BIEN`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}



if (budy.includes('Buenas tardes') || budy.includes('buenas tardes')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n BUENAS TARDES ${pushname} ESPERO QUE TE ENCUENTRES BIEN, Y TENGAS UNA BONITA TARDE 💖`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if (budy.includes('Buenas noches') || budy.includes('buenas noches')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n BUENAS NOCHES ${pushname} ESPERO QUE TE ENCUENTRES BIEN , DULCES SUEÑOS :b`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if (budy.includes('te amo') || budy.includes('Te amo') || budy.includes("bot te amo") || budy.includes("Bot te amo")) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n YO TAMBIEN TE AMO ${pushname} 💖`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if (budy.includes('te quiero')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n YO TAMBIEN TE QUIERO ${pushname} 💖`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}




if (budy.includes('como te llamas ') || budy.includes('Como te llamas') || budy.includes('Cómo te llamas') || budy.includes('cómo te llamas')) {
  const message = `YOMI-BOT-𝐉𝐎𝐄𝐋\n\n YO ME LLAMO YOMI ,  ${pushname} 😃 ¿y tu?`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}







if (budy.toLowerCase() === 'a') {
  const message = `RROZ👻`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if (budy.toLowerCase() === 'que') {
  const message = `SO👻`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if (budy.toLowerCase() === 'rra') {
  const message = `TA👻`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if(budy.toLowerCase() === "mrd"){
const message = kk + `  ${pushname}😬`
sock.sendMessage(from, { text: message }, { quoted: info });
}

if (budy.toLowerCase() === 'mierda') {
  const message = kk + ` ${pushname}😬`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}


if(budy.includes('mrd') || budy.includes('Mrd') || budy.includes('mierda') || budy.includes('Mierda') || budy.includes('puta') || budy.includes('Puta')){
const message = kk + ` ${pushname}`;
sock.sendMessage(from, { text: message }, { quoted: info });
}



if (budy.toLowerCase() === 'te voy a poner en adopción') {
  const message = `𝚗𝚘 ${pushname}, 𝚕𝚊𝚖𝚎𝚗𝚝𝚘 𝚍𝚎𝚜𝚌𝚒𝚛𝚝𝚎 𝚚𝚞𝚎 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎𝚜 𝚙𝚘𝚗𝚎𝚛𝚖𝚎 𝚎𝚗 𝚊𝚍𝚘𝚙𝚌𝚒𝚘𝚗, 𝚜𝚘𝚢 𝚞𝚗 𝚋𝚘𝚝, 𝚗𝚘 𝚞𝚗 𝚋𝚎𝚋𝚎́  𝚊𝚍𝚎𝚖𝚊𝚜 𝚍𝚎𝚙𝚎𝚗𝚍𝚎 𝚍𝚎 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚘 𝚓𝚘𝚎𝚕.𝚡𝚢𝚣 𝚜𝚒 𝚖𝚎 𝚚𝚞𝚒𝚎𝚛𝚎 𝚙𝚘𝚗𝚎𝚛 𝚎𝚗 𝚊𝚍𝚘𝚙𝚌𝚒𝚘𝚗 𝚘 𝚗𝚘`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}




if (budy.toLowerCase() === 'soy nuevo') {
  const message = await sock.sendMessage(from, {
    audio: { url: "./Media/Audios/bienvenido.mp3" },
    react: { text: '👋', key: info.key }
  });
}




if (budy.toLowerCase() === 'yomi') {
  const message = `𝚜𝚒 𝚎𝚜 𝚎𝚜𝚎 𝚎𝚜 𝚖𝚒 𝚗𝚘𝚖𝚋𝚛𝚎 ¿𝚐𝚛𝚊𝚌𝚒𝚘𝚜𝚘 𝚜𝚒𝚎𝚛𝚝𝚘? ${pushname}👻`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}

if (budy.includes('undefined')) {
  const message = `𝚞𝚙𝚜❗ ${pushname} 𝚙𝚊𝚛𝚌𝚎 𝚚𝚞𝚎 𝚑𝚞𝚋𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛, 𝚒𝚗𝚝𝚎𝚗𝚝𝚊𝚕𝚘 𝚖𝚊𝚜 𝚝𝚊𝚛𝚍𝚎, 𝚘 𝚛𝚎𝚙𝚘𝚛𝚝𝚊 𝚎𝚕 𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚌𝚛𝚎𝚊𝚍𝚘𝚛❌`;
  sock.sendMessage(from, { text: message }, { quoted: info });
}






} 
 
 
 
 
 
 
 
 
 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'green'))
}
 
 
 }
 
 
 
        
    })





    
}

startProo()