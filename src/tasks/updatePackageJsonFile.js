import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { toValidPackageName } from './../utils/package'

const updatePackageJsonFile = async (packageInfo) => {
    try {
        const cwd = process.cwd()
        const root = path.join(cwd, packageInfo.packageName)
        const template = 'vanilla'
        const templateDir = path.join(__dirname, `../templates/${template}`)

        const pkg = require(path.join(root, `package.json`))
        pkg.name = toValidPackageName(packageInfo.packageName)
        fs.writeFileSync( path.join(templateDir, `package.json`), JSON.stringify(pkg, null, 2))
        console.log(`Updated package.json name property to ${chalk.green(packageInfo.packageName)}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default updatePackageJsonFile