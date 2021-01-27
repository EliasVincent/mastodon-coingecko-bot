const Mastodon = require("mastodon-api");
const fetch = require("node-fetch");
const cron = require("node-cron");
const express = require("express");

console.log("Starting bot..");

// create new Mastodon Bot
const Bot = new Mastodon({
  client_id: "insert here",
  client_secret: "insert here",
  access_token: "insert here",
  timeout_ms: 60 * 1000,
  api_url: "https://yourmastodoninstance.xyz/api/v1/",
});

let btcPrice = "";

// fetch API data
async function fetchData() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );

  if (response.ok) {
    const responseData = await response.json(); // jsonifys the response we get
    console.log(responseData);
    btcPrice = responseData.bitcoin.usd;
    console.log(btcPrice);

    postToot();
  } else {
    console.log("API Error");
  }
}

// create the post
function postToot() {
  const params = {
    status: `Bitcoin price right now: ${btcPrice}$`,
  };

  Bot.post("statuses", params, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}


// create express backend server 
app = express();

// it now runs once every full hour
cron.schedule('0 * * * *', function() {
    console.log('posting scheduled toot..');
    fetchData()
    console.log('done!');
  });

app.listen(3030);
