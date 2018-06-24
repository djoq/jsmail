require('dotenv').load();

let validateEnv = require('./validateEnv');
let SmtpClient = require('emailjs-smtp-client');

const host = validateEnv('FROMHOST');
const sender = validateEnv('FROMUSER');
const senderPass = validateEnv('FROMPASS');
const port = validateEnv('FROMPORT');

let config = {
  auth: { user: sender, pass: senderPass }
}
var client = new SmtpClient(host, port, config)

var alreadySending = false;

client.onidle = function(){
  if(alreadySending) return

  alreadySending = true
  client.useEnvelope({
    from: sender,
    to: ["admin@coatedgold.com"]
    
  })
}

client.onready = function(failedRecipients){
  if(failedRecipients.length){
    console.log("The following addresses were rejected: ", failedRecipients)
  }
  // start transfering the e-mail
}

client.onready = function(){
  client.send("Subject: test\r\n");
  client.send("\r\n");
  client.send("Message body");
  client.end();
}


client.ondone = function(success){
  if(success){
    console.log("The message was transmitted successfully");
  }
}
