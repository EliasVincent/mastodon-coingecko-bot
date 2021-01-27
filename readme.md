# Mastodon CoinGecko Bot

A bot for Mastodon that fetches data from the public CoinGecko API, made with Node

> Public API means: no API keys needed!

# Setup

- Go to your Mastodon instance and create a new application under *Preferences -> Development*
- Insert client_id, client_secret and access_token inside of `CoinGeckoBot.js`
- Insert the API URL of your Mastodon instance
- Visit [CoinGecko's API Documentation](https://www.coingecko.com/en/api#explore-api) on how to use the API. By default it fetches and posts the current Bitcoin price in USD every hour

# Install

- Install NodeJS on your computer/server
- Run `npm install` in the root directory of the project
- Start the bot with `node ./CoinGeckoBot.js`

# Run Bot in the Background

**Forever** is a great tool that lets you run Node apps in the background

- install forever globally with `sudo npm install -g forever` *you might need to do this with sudo*
- start bot in the background with `forever start -a CoinGeckoBot.js`
- check all running apps with `forever list`
- stop bot with `forever stop CoinGeckoBot.js`

[see the bot in action](https://catspace.xyz/web/accounts/805)

*(yes there is an npm package for the CoinGecko API, but with this bot it's not dependent on yet another package)*