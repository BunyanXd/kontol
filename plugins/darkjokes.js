let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=Dawnfrostkey`)
  let json = await res.buffer()
  conn.sendButtonImg(m.chat, json, 'DarkJokes', watermark, 'Get Again', `${usedPrefix + command}`, m)
}
handler.help = ['darkjokes']
handler.tags = ['internet','image']

handler.command = /^(darkjokes)$/i
handler.register = true

module.exports = handler
