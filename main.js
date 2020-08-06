const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('bb754ae70f1bbddda77ecd34b8d2b962409bad0288d9b96ca20a771f38358ba9');
const myWalletAddress =myKey.getPublic('hex');

let ashishcoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key of reciever', 10);
tx1.signTransaction(myKey);
ashishcoin.addTransaction(tx1);

console.log('\nStarting the miner..');
ashishcoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Ashish is',ashishcoin.getBalanceofAddress(myWalletAddress));
console.log('Is chain valid?', ashishcoin.isChainValid());
