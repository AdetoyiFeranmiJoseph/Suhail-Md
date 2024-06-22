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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101316160";




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



global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_56_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVWVweTRFVG1NSjdtRlhVRXhuSnpMSlBkVnloaFVVY3pWYUJFVGg3ZVBsMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTAxMzE2MTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRjBCMUJDOTM3Qzc1NDI4NERFRTkyNDg1NTQyOTQ2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwMzIxOTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGFzQVQtdFlTZUcyWHRVeWxEaS1Hd1wiLFxuICBcInBob25lSWRcIjogXCJhNzBlYTI0Yi1kZjFlLTRmZjYtYWU4YS01YTg5ZGM0Zjg5NTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTE1LFxuICAgICAgMTMyLFxuICAgICAgNzEsXG4gICAgICAxMDUsXG4gICAgICA4NCxcbiAgICAgIDEzMCxcbiAgICAgIDEwMyxcbiAgICAgIDE3NyxcbiAgICAgIDIxMCxcbiAgICAgIDEsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICAxMjQsXG4gICAgICAxMTIsXG4gICAgICA5NSxcbiAgICAgIDIxNCxcbiAgICAgIDcwLFxuICAgICAgMjEsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTAzLFxuICAgICAgMjE2LFxuICAgICAgMTU2LFxuICAgICAgOSxcbiAgICAgIDIzMixcbiAgICAgIDIzMixcbiAgICAgIDczLFxuICAgICAgMTIsXG4gICAgICAyMDcsXG4gICAgICAxNzEsXG4gICAgICAxNzMsXG4gICAgICAyNyxcbiAgICAgIDE2NixcbiAgICAgIDE2MSxcbiAgICAgIDU5LFxuICAgICAgNzksXG4gICAgICA1NyxcbiAgICAgIDc2LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREJMNjlZRDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDEzMTYxNjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjYzMDE3OTYwMzY3MTE6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGZXJhbm1pXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjIrNWx3UTliTFpzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2SDQyV3pER1c0L1RYeWlYRWJoTUtKSjJDSlkyVW53OXhYUFhTUmVScVVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtvV3VBaHF1Y0dZZlRsMXVrbHhRU0hwdXlObDJnemg3NSszOFJnQjBGSFNjL3k3OXhSeXNPUVgxMlBYREc3OS9zdzQvTExpcW1GZjl0eGJiWk1lTkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZtR2liYjVBb3AybW1NekdZZEJWRldZSndJTHRidGtCWkVQVXV4dlhKbjkremxxdy9GdC9lY2FCOUh5cnFJOE9QdEE4bUNZQkF4eDRDckRJNjFLNEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDEzMTYxNjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwMzIxODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNVWC5qc29uIjogIntcImtleURhdGFcIjpcImtCaHNvVGcwOXlHZ2dPZlBXWVJNWlc2M05vdERaWSs5K3F4VFlRaDFmRWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NjE3MTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
