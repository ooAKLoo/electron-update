/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
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
