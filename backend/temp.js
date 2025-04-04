const fs = require("fs");

const raw = fs.readFileSync("firebaseJson.json", "utf8");
const base64 = Buffer.from(raw).toString("base64");
console.log(base64);
