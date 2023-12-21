const { app, BrowserWindow } = require("electron");

function createWindow() {
	// create the browser window
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	// Load a local HTML file or a web URL
	win.loadFile('index.html');
	// Or load a remote URL
	// win.loadURL('https://example.com');
}


app.whenReady().then(createWindow);

app.on('window-all-closed',()=> {
	if (process.platform !== 'darwin') app.quit();
})

app.on('activate',()=> {
	if (BrowserWindow.getAllWindows().length ===0) createWindow();
})

