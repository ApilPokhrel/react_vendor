import web3 from "./web3";

const createTransaction = ({ to, value, gas = 25000, data = "" }) => ({
  to,
  value,
  gas,
  data: web3.utils.toHex(data)
});

export default {
  async sendTransaction(transaction, account) {
    const signedTx = await account.signTransaction(transaction);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  },

  async sendTransactionUsingPrivateKey(transaction, privateKey) {
    const tx = createTransaction(transaction);
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  }
};
