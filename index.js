
let ImapClient = require('emailjs-imap-client');
let SmtpClient = require('emailjs-smtp-client');

let config = require('./config');

const host = config('MAILHOST');
const ports = {
	imap: 993,
	smtp: 587
}

const config = {
	    auth: {
	        user: config('USER'),
	        pass: config('PASS')
	    }
	}

exports.smtp = () => {
	var client = new SmtpClient(host, ports.smtp, config)

 	return client

//	client.onidle = () => {
//	 	console.log('smtp connection established')
//	 }
}

exports.imap = () => {
	client = new ImapClient(host, ports.imap, config);

	return client
}

exports.connect = (client) => {
	client.connect().then(() => { 
		console.log('connected') 
    });
}


