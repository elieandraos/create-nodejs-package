import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { toValidPackageName } from '../../utils/package'
import { respondOk, abortWithMessage } from '../../utils/console'

const updatePackageJsonFile = async (packageInfo) => {
    try {
        const pkg = require(path.join(packageInfo.root, `package.json`))
        pkg.name = toValidPackageName(packageInfo.packageName)

        fs.writeFileSync(
            path.join(packageInfo.root, `package.json`),
            JSON.stringify(pkg, null, 2)
        )

        await respondOk(
            `Updated package.json name property to ${chalk.cyan(
                packageInfo.packageName
            )}`
        )
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default updatePackageJsonFile
