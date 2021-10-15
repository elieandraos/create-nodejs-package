import askForPackageInfo from './tasks/askForPackageInfo'

export async function run() {
    let packageInfo = await askForPackageInfo()
    console.log(packageInfo)
}

/**
 * Node env:
 * - understands commonJs only (require/module.exports)
 * - needs esm to use module import/export
 *
 * Browser env:
 *  - most bundlers support both commonJs and ESM are out of the box
 */
