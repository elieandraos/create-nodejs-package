import path from 'path'
import chalk from 'chalk'
import { exec } from 'child_process'
import _ from '@elieandraos/cli-tools'

const root = path.join(__dirname, '../')

try {
    exec('npm run build', { cwd: root }, () => {
        _.release(root).then(() => {
            console.log(chalk.bgGreen.white('\nDONE! 🎉\n'))
        })
    })
} catch (e) {
    console.log(e)
}