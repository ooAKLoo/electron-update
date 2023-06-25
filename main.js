const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  autoUpdater.checkForUpdatesAndNotify()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available')
})

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded')
})
