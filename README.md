![Crates.io](https://img.shields.io/crates/l/rustc-serialize.svg?style=popout&logo=appveyor)
# Nodejs Rich Presence

Nodejs_RichPresence is an opensource Nodejs script wich alows you to make you own Rich Presence in Discord

## Installation
1. Go to [Release](https://github.com/Pleximar/Nodejs_RichPresence/releases) and download the newest version of NodejsRichPresence
2. Unzip it and go to /config and run install.bat
3. Go to [Discord Devportal](https://discordapp.com/developers/applications/) and create an Application. You have to name the application as you want it to appear in discord. Go to "RichPresence -> Art Assets" and upload your images.
4. Configure your Richpresence:
```json
    "ID": "578954750385586219", //ID of you application on https://discordapp.com/developer/applications/
    "Details": "made by Pleximar", //First line
    "State": "https://pleximar.de", //Second line
    "LargeImage": "coders", //The name of the picuture(you have to add it on dev portal discord)
    "SmallImage": "logo", //The name of the picuture(you have to add it on dev portal discord)
    "LargeText": "https://code.discord.id", //Large image text(hover)
    "SmallText": "github.com/pleximar", //Small image text(hover)
    "Time": false //Show timestamp
}
```
5. Start it with start.bat
