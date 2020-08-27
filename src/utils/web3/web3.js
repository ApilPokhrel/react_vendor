/* global Web3 */
import config from "../../../config/client.json";

const web3 = new Web3(new Web3.providers.HttpProvider(config.web3.httpProvider));

export default web3;
