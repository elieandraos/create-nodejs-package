import askForPackageInfo from './tasks/askForPackageInfo'

export async function run() {
    let packageInfo = await askForPackageInfo()
    console.log(packageInfo)
}
