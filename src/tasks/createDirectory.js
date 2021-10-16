import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { empty } from './../utils/fileSystem'

const createDirectory = async (packageInfo) => {
    const cwd = process.cwd()
    const root = path.join(cwd, packageInfo.packageName)

    try {
        if (!packageInfo.overwriteExistingDirectory) fs.mkdirSync(root)
        else if (packageInfo.overwriteExistingDirectory === true) empty(root)
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
