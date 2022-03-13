const path = require('path');
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, '../build/index.html'))
    } else {
        win.loadURL("http://localhost:3000")
    }
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})