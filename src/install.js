import chalk from 'chalk'
import * as worker from './tasks/install'

export async function run() {
    let packageInfo = await worker.askForPackageInfo()

    await worker.createDirectory(packageInfo)
    await worker.copyTemplate(packageInfo)
    await worker.updatePackageJsonFile(packageInfo)
    await worker.installDependencies(packageInfo)

    console.log(chalk.bgGreen.white('\nDONE!\n'))
}
