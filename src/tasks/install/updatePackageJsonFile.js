import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import _ from '@elieandraos/cli-tools'

const updatePackageJsonFile = async (packageInfo) => {
    try {
        let { packageName, packageScope, root } = packageInfo
        packageName.trim().toLocaleLowerCase()
        packageScope.trim().toLowerCase()

        const pkg = require(path.join(root, `package.json`))
        pkg.name = packageScope ? `${packageScope}/${packageName}` : packageName

        fs.writeFileSync(
            path.join(packageInfo.root, `package.json`),
            JSON.stringify(pkg, null, 2)
        )

        await _.respondOk(
            `Updated package.json name property to ${chalk.cyan(packageName)}`
        )
    } catch (e) {
        _.abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default updatePackageJsonFile
