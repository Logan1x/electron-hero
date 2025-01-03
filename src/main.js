// src/main.js
import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // Optional: for security
      contextIsolation: true,
      enableRemoteModule: false,
      // Disable the ability to open dev tools
      devTools: false,
    },
  });

  win.loadURL("http://localhost:5173"); // Load the Vite dev server

  // Disable keyboard shortcuts for developer tools
  win.webContents.on("before-input-event", (event) => {
    if (event.key === "I" && (event.control || event.meta) && event.shift) {
      event.preventDefault(); // Prevent Ctrl+Shift+I or Cmd+Shift+I
    }
    if (event.key === "F12") {
      event.preventDefault(); // Prevent F12
    }
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
