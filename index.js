const cron = require("node-cron");
const express = require("express");

const app = express();

const MINUTES = 14; // runs every 14 mins
const PING_URL = "https://cnd-payments-backend.onrender.com/ping";

cron.schedule(`*/${MINUTES} * * * *`, async function () {
  try {
    console.log(`pinging...`);
    console.log(`url: ${PING_URL}`);
    const res = await fetch(PING_URL, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8080);
