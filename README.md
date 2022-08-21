
## Quick Start (Run locally)

  

Install:

  

- NodeJS 16.\* or higher https://nodejs.org/en/download/

- Internet Computer dfx CLI https://smartcontracts.org/docs/current/developer-docs/quickstart/local-quickstart/

- Visual Studio Code (Recommended Code Editor) https://code.visualstudio.com/Download

- VSCode extension - Motoko (Recommended) https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko

  

```bash

sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

```

  

Clone this Git repository and cd to project folder.

  

Open command terminal:

Enter the commands to start dfx local server in background:

  

```bash

dfx start --background

```

  

Note: If you run it in MacOS, you may be asked to allow connections from dfx local server.

  

Enter the commands to install dependencies, deploy canister and run Next.js dev server:

  

```bash

yarn

dfx deploy

yarn dev

```

  

Open in Chrome the following URL to try the demo app:

http://localhost:3000/

  

Update Declarations:

```bash
yarn sync:canisters_name
```
 After each backend change, it is necessary to update the Declarations, after running on the command, go to the folder's `index.js` file of the same name as `canisters_name` and remove the export section, add `NEXT_PUBLIC_` after `process.env.`.
 If you have a new canisters, go to File `package.json` to add one more sync: command

Cleanup - stop dfx server running in background:  
```bash

dfx stop

```