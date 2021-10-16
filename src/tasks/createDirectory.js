import fs from 'fs'
import chalk from 'chalk'
import { empty } from './../utils/fileSystem'

const createDirectory = async (packageInfo) => {
    try {
        if (!packageInfo.hasOwnProperty('overwriteExistingDirectory')) fs.mkdirSync(packageInfo.root)
        else if (packageInfo.overwriteExistingDirectory === true) empty(packageInfo.root)
        else {
            console.log(chalk.red('✖ Operation cancelled'))
            process.exit(1)
        }
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default createDirectory
