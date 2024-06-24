const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23408101316160";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";



global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_26_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejdKQ2tkQmlqVHM0bWluMVpvZmFYUG5oeThGM2h6alNJVFJuZ0tkLzc2az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZVhoTUdVc0lSbjJZbTNER3NTTjdVUVwiLFxuICBcInBob25lSWRcIjogXCJhMGViNjE2Yi04MGI5LTQ3ZTgtOGZmNi0xMzQzOGUwYmU1MDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAxNjgsXG4gICAgICA1MixcbiAgICAgIDE5LFxuICAgICAgMjAxLFxuICAgICAgNCxcbiAgICAgIDQ4LFxuICAgICAgMjQ0LFxuICAgICAgMTk0LFxuICAgICAgNzAsXG4gICAgICA5MyxcbiAgICAgIDYxLFxuICAgICAgMjEwLFxuICAgICAgMzksXG4gICAgICAxNDksXG4gICAgICAxOTIsXG4gICAgICAyNTMsXG4gICAgICAxMjAsXG4gICAgICAxMDAsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICA3OSxcbiAgICAgIDExMSxcbiAgICAgIDUzLFxuICAgICAgMjAxLFxuICAgICAgMjM3LFxuICAgICAgMTQ1LFxuICAgICAgMjE2LFxuICAgICAgMjA5LFxuICAgICAgMjksXG4gICAgICAxMCxcbiAgICAgIDUzLFxuICAgICAgMTI4LFxuICAgICAgMTc3LFxuICAgICAgNTQsXG4gICAgICAyMzEsXG4gICAgICAxMDQsXG4gICAgICA0MCxcbiAgICAgIDU0LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFSTVlGUlJZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxMzE2MTYwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NjMwMTc5NjAzNjcxMToxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUys1bHdRdU52a3N3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZINDJXekRHVzQvVFh5aVhFYmhNS0pKMkNKWTJVbnc5eFhQWFNSZVJxVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV2txSzZ4TFAvWnJmeUhUYW0valZXM1FRcFN0R1NYenV1bXdpWmtjQVNCOEhtSkZTZGk3Q1dCQUg4dFZNOUZNRG5sTUtlQ2I0bW9PWXdJS2FtMU9WQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0RrWC9lMUZUMGovMjdlRUhaQVVJR1ZCRXFndC9ZaDNXV2I1Ti9pSE5McVdpU0hBK0YveTFBNkFVeDBTa1lLc2g0ZDI4SG1KMXkzTVRQdjFjSTlZQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTMxNjE2MDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyMTc1OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQOU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA5Ty5qc29uIjogIntcImtleURhdGFcIjpcIkU2ZTNRNHVFOHVrZWIwb0Y2M0o0NXRrV2hoQ2FRZmJzWCtoKzBnTVc5YTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NjE3MTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyMTc2MDQyMjFcIn0iCn0=to"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
