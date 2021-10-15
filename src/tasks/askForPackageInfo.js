import chalk from 'chalk'
import inquirer from 'inquirer'
import { exists } from './../utils/fileSystem'
import { isValidPackageName } from './../utils/package'

const askForPackageInfo = async () => {
    const questions = [
        {
            type: 'input',
            name: 'packageName',
            prefix: '',
            message: 'Enter the package name:',
            validate: (value) => {
                return isValidPackageName(value)
                    ? true
                    : 'Enter a valid package name'
            },
        },
        {
            type: 'list',
            name: 'overwriteExistingDirectory',
            prefix: '',
            message: (answers) => {
                console.log(`Target directory ${chalk.cyan(answers.packageName)} is not empty.`)
            },
            choices: [
                { name: 'Overwrite', value: true },
                { name: 'Cancel', value: false }
            ],
            when: (answers) => {
                return exists(answers.packageName)
            },
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers
}

export default askForPackageInfo
