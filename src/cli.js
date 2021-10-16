import askForPackageInfo from './tasks/askForPackageInfo'
import createDirectory from './tasks/createDirectory'
import copyTemplate from './tasks/copyTemplate'
import updatePackageJsonFile from './tasks/updatePackageJsonFile'

export async function run() {
    let packageInfo = await askForPackageInfo()
    await createDirectory(packageInfo)
    await copyTemplate(packageInfo)
    await updatePackageJsonFile(packageInfo)
}

/**
 * Node env:
 * - understands commonJs only (require/module.exports)
 * - needs esm to use module import/export
 *
 * Browser env:
 *  - most bundlers support both commonJs and ESM are out of the box
 */
