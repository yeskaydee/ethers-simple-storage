const ethers = require ("ethers");
const fs = require("fs");

async function main() {
//compiler them in our code
//compile them separately
// http://127.0.0.1:7545 -- rpc proivder
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
const wallet = new ethers.Wallet(
    "0xe32d5cf7bcaba5f5f9617ae9bd1be23341d3d6db2e1927afbe136d5558911975",
    provider
);
const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");

const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
console.log("Deploying contract...");
const contract= await contractFactory.deploy(); //await? 
//  -- only to be used in async function --> stop here! wait for contract to be deployed
//  -- then continue
console.log(contract);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })