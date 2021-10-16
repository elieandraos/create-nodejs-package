import fs from 'fs'
import chalk from 'chalk'
import { empty } from './../utils/fileSystem'
import { abortWithMessage } from './../utils/console'

const createDirectory = async (packageInfo) => {
    try {
        if (!packageInfo.hasOwnProperty('overwriteExistingDirectory'))
            fs.mkdirSync(packageInfo.root)
        else if (packageInfo.overwriteExistingDirectory === true)
            empty(packageInfo.root)
        else abortWithMessage('Operation cancelled')
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default createDirectory
