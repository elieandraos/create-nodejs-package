import fs from 'fs'
import { emptyDir } from './../utils/fileSystem'
import { abortWithMessage } from './../utils/console'

const createDirectory = async (packageInfo) => {
    try {
        if (
            !Object.prototype.hasOwnProperty.call(
                packageInfo,
                'overwriteExistingDirectory'
            )
        )
            fs.mkdirSync(packageInfo.root)
        else if (packageInfo.overwriteExistingDirectory === true)
            emptyDir(packageInfo.root)
        else abortWithMessage('Operation cancelled')
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default createDirectory
