const { ipcRenderer } = require('electron')

ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available')
  alert('A new update is available. Downloading now...')
})

ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded')
  alert('Update Downloaded. It will be installed on restart. Restart now?')
  // At this point, it's a good idea to prompt the user to quit and restart the app.
})
