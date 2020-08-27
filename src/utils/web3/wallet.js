/* global Web3 EthWallet */
import store from "store";
import web3 from "./web3";
import bip39 from "bip39";
import hdkey from "hdkey";

export default class {
  constructor({ password, storeName }) {
    this.password = password;
    this.storeName = storeName;
    this.defaultAccount = null;
    this.accounts = null;

    if (store.get(this.storeName)) {
      this.load(password);
    }
  }

  create({ totalAccounts = 1 } = {}) {
    if (store.get(this.storeName)) throw Error("Please clear the existing wallet");
    const mnemonic = bip39.generateMnemonic();
    this.createFromSeed({ mnemonic, totalAccounts });
  }

  createFromSeed({ mnemonic, totalAccounts = 1 }) {
    this.clear();
    store.set("chabi", { mnemonic, password: this.password });
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdwallet = hdkey.fromMasterSeed(seed);
    const walletHDpath = "m/44'/60'/0'/0/";

    for (let i = 0; i < totalAccounts; i++) {
      const wallet = hdwallet.derivePath(walletHDpath + i).getWallet();
      const address = `0x${wallet.getAddress().toString("hex")}`;
      const privateKey = wallet.getPrivateKey().toString("hex");
      web3.eth.accounts.wallet.add({ address, privateKey });
    }
    web3.eth.accounts.wallet.save(this.password, this.storeName);
    this.load();
  }

  load() {
    try {
      const accounts = web3.eth.accounts.wallet.load(this.password, this.storeName);
      const defaultAccount = accounts[0];
      web3.eth.defaultAccount = defaultAccount.address;
      this.defaultAccount = defaultAccount;
      this.accounts = accounts;
      return true;
    } catch (e) {
      console.warn("Warning (wallet.load):", e.message);
      return false;
    }
  }

  clear() {
    store.remove("chabi");
    store.remove("sanduk");
    store.remove("history");
    store.remove("vault");
    web3.eth.defaultAccount = null;
    web3.eth.accounts.wallet.clear();
    this.defaultAccount = null;
    this.accounts = null;
  }
}
