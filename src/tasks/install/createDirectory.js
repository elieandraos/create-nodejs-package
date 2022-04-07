import _ from '@elieandraos/cli-tools'

const createDirectory = async (packageInfo) => {
    try {
        let { root, overwriteExistingDirectory } = packageInfo

        if (
            !Object.prototype.hasOwnProperty.call(
                packageInfo,
                'overwriteExistingDirectory'
            )
        )
            _.createDirectory(packageInfo.root)
        else if (overwriteExistingDirectory === true)
            _.emptyDirectory(root)
        else _.abortWithMessage('Operation cancelled')
    } catch (e) {
        _.abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default createDirectory
