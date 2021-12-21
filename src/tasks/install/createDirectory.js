import fs from 'fs'
import _ from '@elieandraos/cli-tools'

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
            _.empty(packageInfo.root)
        else _.abortWithMessage('Operation cancelled')
    } catch (e) {
        _.abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default createDirectory
