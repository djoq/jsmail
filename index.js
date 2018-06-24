
let ImapClient = require('emailjs-imap-client');
let SmtpClient = require('emailjs-smtp-client');

let validateEnv = require('./validateEnv');

const smtphost = validateEnv('MAILHOST');
const imaphost = validateEnv('MAILHOST')
const ports = {
	imap: 993,
	smtp: 587 
}

const config = {
	    auth: {
	        user: validateEnv('USER'),
	        pass: validateEnv('PASS')
	    },
            IgnoreTLS: false
	}

exports.smtp = (() => { return  new SmtpClient(smtphost, ports.smtp, config);   })();

exports.imap = (() => { return new ImapClient(imaphost, ports.imap, config); })();


exports.connect = (client) => {
	return client.connect()
        // .then(() => { 
        //		console.log('connected') 
        //  });
}


