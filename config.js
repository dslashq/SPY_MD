const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dslash065@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "233204120083" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233593621358";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh0U0tqVHZoTnpDNENVWFFRSTdiM1ZtaHpyUEx5dmRHbnNOblMrYzRQKzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFMcF8xWkJMUzNTaEdubDR3dXl4eWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjliNTA3ODgtZWMyMi00ZjYwLWI0MTktNjZjZjU5YjRmY2M0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTI4LFxuICAgICAgNTEsXG4gICAgICAyMTUsXG4gICAgICAxODIsXG4gICAgICA0MyxcbiAgICAgIDg4LFxuICAgICAgMTg0LFxuICAgICAgMjA0LFxuICAgICAgMTQsXG4gICAgICAyNTAsXG4gICAgICAyMzUsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMTQwLFxuICAgICAgMTAsXG4gICAgICA1MSxcbiAgICAgIDY4LFxuICAgICAgMjQ5LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTgsXG4gICAgICA3NyxcbiAgICAgIDY2LFxuICAgICAgNzgsXG4gICAgICAxMTgsXG4gICAgICAxNTUsXG4gICAgICAzNCxcbiAgICAgIDI0NyxcbiAgICAgIDEyMyxcbiAgICAgIDgsXG4gICAgICAyMDAsXG4gICAgICAyMDgsXG4gICAgICA1MSxcbiAgICAgIDEwNCxcbiAgICAgIDExNCxcbiAgICAgIDEyNSxcbiAgICAgIDEyNCxcbiAgICAgIDIwMyxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdGWlY2U0hIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTM2MjEzNTg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2NDMyNDI1MjM4NTQyOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuOCs3SUdFS3k4L2JRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODNMMnpDZ2QvTVVRYURuMzYrNjY3UW5JdjgybFMvSElEa01KRG1kcWRrND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmUDE1UmJjeWt4NmJuL1NudjVCcEJFWmNNOVY4b09jbDZxQTZYaFZkc3dPZ052YkVWTnhaQk14RWRTa3M4VXNVRVVncGpINStwQkhPbHZaeEZyelZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsdkhrQUM1THprbEozK1VCbmszQk94MDh2TmFxWGdIRCtvK1VlaVhGQmt3MVhMMVRpbVRHOGErVU1SYWNqZ2Mzb0g5MmEyZXRzVm0xdXIrNXpHM1JpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTM2MjEzNTg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcyMDM2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0vTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTS9OLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "♛✑✪◤𝑺𝑷𝒀_𝑻𝑬𝑪𝑯◥✪☬♛",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
