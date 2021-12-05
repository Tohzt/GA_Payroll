// main.js

const{ app, BrowserWindow, Menu }=require('electron')
const path =require('path')

const electronReload = require('electron-reload')
// Electron Reload
require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow(){
	Menu.setApplicationMenu(Menu.buildFromTemplate([
		{
			label: "",
		},
		{
			label: "File", submenu: [
				{ 
					label: 'Open',
					click: function(){console.log('click')}
				},
				{ label: 'New' },
				{ type: 'separator' },
				{ label: 'Save' },
				{ label: 'Save As' },
				{ type: 'separator' },
				{ role: 'Quit' }
			]
		},
		{
			label: "Edit", submenu: [
				{ label: 'Add Employee' },
				{ label: 'Remove Employee' },
				{ type: 'separator' },
				{ label: 'Update Employees' },
				{ type: 'separator' },
				{ label: 'Reset' }
			]
		}
	]));

	const mainWindow =new BrowserWindow({
		width:800,
		height:600,
		webPreferences:{
			preload: path.join(__dirname,'./src/logic/preload.js')
		}
	})
	mainWindow.loadFile('./src/html/index.html')

	mainWindow.webContents.openDevTools()
}

app.whenReady().then(()=>{
	createWindow()

	app.on('activate',function(){
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if(BrowserWindow.getAllWindows().length===0)createWindow()
	})
})

app.on('window-all-closed',function(){
	//if(process.platform!=='darwin') app.quit()
	app.quit();
})
