const { exec } = require('child_process')
const path = require('path')

function installFabric(version) {
    const installerPath = path.join(__dirname, 'fabric-installer.jar')
    const command = `java -jar "${installerPath}" client -mcversion ${version} -dir .minecraft`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`)
            return
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`)
            return
        }
        console.log(`Stdout: ${stdout}`)
    })
}

installFabric('1.20.1')
