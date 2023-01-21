const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp.utils.randomPrivateKey();

console.log(`privateKey: ${toHex(privateKey)}`);

const publicKey = secp.getPublicKey(privateKey);

function getAddress(publicKey) {
  const rest = publicKey.slice(1);
  const hash = keccak256(rest);
  return hash.slice(12);
}

const short = getAddress(publicKey);

console.log(`publicKey: ${toHex(short)}`);
