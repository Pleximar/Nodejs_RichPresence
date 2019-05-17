
//======================================================
//
// Copyright © Pleximar - 2019
//
// NOTE: Go in "settings.json" to configure your RPC
//======================================================



const Discord = require("discord-rpc")
const settings = require("./settings.json")

const startTimestamp = new Date()

const ID = settings.ID
const LI = settings.LargeImage
const LT = settings.LargeText
const SI = settings.SmallImage
const ST = settings.SmallText
const time = settings.Time
const dtls = settings.Details
const ste = settings.State 

console.log(` `)
console.log(` `)
console.log(`  /$$$$$$$  /$$                     /$$                                  `)
console.log(` | $$__  $$| $$                    |__/                                  `)
console.log(` | $$  \ $$| $$  /$$$$$$  /$$   /$$ /$$ /$$$$$$/$$$$   /$$$$$$   /$$$$$$ `)
console.log(` | $$$$$$$/| $$ /$$__  $$|  $$ /$$/| $$| $$_  $$_  $$ |____  $$ /$$__  $$`)
console.log(` | $$____/ | $$| $$$$$$$$ \  $$$$/ | $$| $$ \ $$ \ $$  /$$$$$$$| $$  \__/`)
console.log(` | $$      | $$| $$_____/  >$$  $$ | $$| $$ | $$ | $$ /$$__  $$| $$      `)
console.log(` | $$      | $$|  $$$$$$$ /$$/\  $$| $$| $$ | $$ | $$|  $$$$$$$| $$      `)
console.log(` |__/      |__/ \_______/|__/  \__/|__/|__/ |__/ |__/ \_______/|__/      `)
console.log(` `)
console.log(`============== Loading RPC... ================`)
console.log(` `)
console.log(`ID: ${ID}`)
console.log(`Details: ${dtls}`)
console.log(`State: ${ste}`)
console.log(`Large Text: ${LT}`)
console.log(`Large Image: ${LI}`)
console.log(`Small Text: ${ST}`)
console.log(`Small Image: ${SI}`)
console.log(`Time: ${time}`)
console.log(`============== Logged in! ================`)

Discord.register(ID)

const rpc = new Discord.Client({transport: "ipc"});

rpc.on("ready", () => {
    if(time === true){
    rpc.setActivity({
        details: dtls,
        state: ste,
        startTimestamp,
        largeImageKey: LI,
        smallImageKey: SI,
        largeImageText: LT,
        smallImageText: ST,
        instance: false
    })
} else {
    rpc.setActivity({
        details: dtls,
        state: ste,
        largeImageKey: LI,
        smallImageKey: SI,
        largeImageText: LT,
        smallImageText: ST,
        instance: false
    })
}
})

rpc.login(ID).catch(console.error)