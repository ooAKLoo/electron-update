/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { contextBridge, remote, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => remote.app.getVersion(),
  onUpdateAvailable: (callback) => ipcRenderer.on('update_available', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update_downloaded', callback),
  getVersions: () => process.versions
})
