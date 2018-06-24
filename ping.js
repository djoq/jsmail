// ping.js

const { imap, smtp, connect } = require('./index');

connect(smtp).then((client) => {
  console.log('connected ->', client);
})
//.catch((error) => {
//  console.log('caught error', error);
//})

imap.listMailboxes((mailboxes) => {
  console.log('mailboxes ->', mailboxes)
})

