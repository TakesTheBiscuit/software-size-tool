# software-size-tool
Software size tool - how big is it? will it fit? how long will it take to download?

## UI
Used create-react-app with node v18.13.0 (via `nbm install --lts`)

- `cd ui`
- `npm i`
- `npm start` 
- Open in a browser: http://localhost:3000

### What the UI does
Simply loads the `/public/api/size-data.json` file and displays it in a `mui` datagrid.

Some time later if we can source enough information we can add filters, visualisations etc. Let's see what happens next.

- N.B Due to my Windows WSL dev env on this project have modified package.json:
    - `    "start": "WATCHPACK_POLLING=true react-scripts start",`
    - This forces polling to watch the non-windows-filesystem of the wsl virtual machine and means hot reload will work

### UI Deployment
GitHub action will publish to GH pages when `main` branch changes.

## Data collation
At the moment this is completely manual edits against the `size-data.json` file in this repo, later could look to automate this process.