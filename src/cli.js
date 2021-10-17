import chalk from 'chalk'
import * as worker from './tasks'

export async function run() {
    let packageInfo = await worker.askForPackageInfo()

    await worker.createDirectory(packageInfo)
    await worker.copyTemplate(packageInfo)
    await worker.updatePackageJsonFile(packageInfo)
    await worker.installDependencies(packageInfo)

    console.log(chalk.bgGreen.white('\nDONE!\n'))
}

/**
 * Node env:
 * - understands commonJs only (require/module.exports)
 * - needs esm to use module import/export
 *
 * Browser env:
 *  - most bundlers support both commonJs and ESM are out of the box
 */
