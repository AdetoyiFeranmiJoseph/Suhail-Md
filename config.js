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


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_02_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrMnpwTkd5QU90bHJwOGRvVWNEeEhWTWJOTDRsRnV2OWFRMXRjSHlCV2NjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDEzMTYxNjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCODhBNDQ1NDc2MTIyQzYyREQwMkI3OUY2RjhCMjJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk3ODU3NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkSTRmcDZiMlQ0eVNrdXBEQ2xTcnJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkYTJjZTBhLTgyODUtNGZmOC05MWU2LTFjMDlhNmUxZWM3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDM4LFxuICAgICAgMTk4LFxuICAgICAgODksXG4gICAgICAxODgsXG4gICAgICAxNTIsXG4gICAgICA3MCxcbiAgICAgIDM5LFxuICAgICAgNDQsXG4gICAgICAxMTMsXG4gICAgICAyMDUsXG4gICAgICAyMjMsXG4gICAgICA3LFxuICAgICAgMTg0LFxuICAgICAgMjA2LFxuICAgICAgMjEwLFxuICAgICAgMTY4LFxuICAgICAgMTc2LFxuICAgICAgMTgwLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA0MyxcbiAgICAgIDExNCxcbiAgICAgIDMwLFxuICAgICAgMjMwLFxuICAgICAgOSxcbiAgICAgIDE2MCxcbiAgICAgIDIxNSxcbiAgICAgIDY0LFxuICAgICAgMTMxLFxuICAgICAgNDUsXG4gICAgICA4NyxcbiAgICAgIDYyLFxuICAgICAgMTg3LFxuICAgICAgOTgsXG4gICAgICAxNjUsXG4gICAgICAwLFxuICAgICAgMjE5LFxuICAgICAgMTIyLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdMRzE0QTVCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxMzE2MTYwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2MzAxNzk2MDM2NzExOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVyYW5taVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pKzVsd1FnWkRXc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNkg0Mld6REdXNC9UWHlpWEViaE1LSkoyQ0pZMlVudzl4WFBYU1JlUnFVYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVR21SbjZBbExLUHJUeFVEVzJyaEpGUzd6dExnVlBTZ3JONlVQVWFObGlZVmxSczZpaEhsa2txQjdUVU50VXFtcWhNd0orWEhuK0R6Sll5OE1nczZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVbFFDdlpFa2RySFdaT01ESGxvUTdxckd5dTNtemdGMjRTMTJULzdnQkc2dzBML2lSa05jeXVJdEV2OU85aVlkd0orUW5xNkJrNjZUVTErWUlDVUVDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAxMzE2MTYwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTc4NTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW5YXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNblguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSaXJ0cDFWcTZsa1V6Znd3VGYwMm1IMW1LSnFXdW5jWGhtd1VMaDBKaDZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDYxNzE3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
