# Truffle-Deployment
Deploying your hashed-files from your machine on Ethereum network through truffle

```markdown
                                                | Deployment Server |
                                                |                   |
  | Local Machine |                             |                   |
  | ------------- |                             |                   |
  |   Truffle     | --------------------------> |                   |
  |                |    Package hashed files    |                   |
  |                | ---------------------------->                   |
  |                |    Wait for confirmation    |                   |
  |                | <----------------------------                   |
  |                |    Confirm successful       |                   |
  |                |    packaging                |                   |
  |                | <--------------------------- |                   |
  |                |    Set up Ethereum account  |                   |
  |                |    and wallet              |                   |
  |                | ---------------------------->                   |
  |                |    Wait for confirmation    |                   |
  |                | <----------------------------                   |
  |                |    Confirm successful       |                   |
  |                |    set up                  |                   |
  |                | <--------------------------- |                   |
  |                |    Connect to Ethereum      |                   |
  |                |    network                  |                   |
  |                | ---------------------------->                   |
  |                |    Wait for confirmation    |                   |
  |                | <----------------------------                   |
  |                |    Confirm successful       |                   |
  |                |    connection              |                   |
  |                | <--------------------------- |                   |
  |                |    Deploy hashed files      |                   |
  |                | ---------------------------->                   |
  |                |    Wait for confirmation    |                   |
  |                | <----------------------------                   |
  |                |    Confirm successful       |                   |
  |                |    deployment               |                   |
  |                | <--------------------------- |                   |

```

> To deploy a contract to the Ethereum network using Truffle, you will need to have Truffle installed on your development machine, as well as an Ethereum network that you can connect to. You can either use a public test network like **Rinkeby** or **Kovan**, or set up your own private network using tools like **Ganache** or **geth**.

Once you have Truffle and an Ethereum network set up, you can use the following steps to deploy your contract:

- Write your Solidity contract code and save it in a file with a `.sol` extension. Make sure to import any dependencies that your contract requires.

- Create a new Truffle project by running the `truffle init` command in your terminal. This will create a new directory with the necessary files and directories for your project.

- In the `contracts` directory of your Truffle project, create a new file for your contract and copy the Solidity code into it.

- In the` migrations` directory of your Truffle project, create a new migration file. This file will contain the code that tells Truffle how to deploy your contract to the Ethereum network.

- In the migration file, use the `deployer.deploy` method to deploy your contract to the Ethereum network. You will need to pass the contract name and any constructor arguments that your contract requires as arguments to the `deploy` method.


Here is an example of a Truffle migration file that deploys the `FileStorage` contract :

```javascript
const FileStorage = artifacts.require("FileStorage");

module.exports = function(deployer) {
  deployer.deploy(FileStorage);
};

```
To deploy the contract, run the `truffle migrate` command in your terminal. This will compile your contract and deploy it to the Ethereum network that you are connected to.

Once the contract is deployed, you can use Truffle's built-in console to interact with it. For example, you can call the `addFile` function to store a file hash on the Ethereum network, or the getFileHash function to retrieve a file hash.


```javascript
truffle(development)> let fileStorage = await FileStorage.deployed()
truffle(development)> fileStorage.addFile("0x123456...", {from: "0xabcdef..."})
truffle(development)> fileStorage.getFileHash(0)

```

To run the script, open a terminal and navigate to the root of your Truffle project, then run the following command:

```
truffle exec deploy.js

```
> This will compile your contract, deploy it to the Ethereum network specified in the `truffle-config.js` file, and print the contract's address to the console.
