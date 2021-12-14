import path from 'path'
import chalk from 'chalk'
import { release } from '@elieandraos/cli-tools'

const root = path.join(__dirname, '../')

try {
    release(root).then(() => {
        console.log(chalk.bgGreen.white('\nDONE! 🎉\n'))
    })
} catch (e) {
    console.log(e)
}
