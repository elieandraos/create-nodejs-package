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
            message: '\nEnter the package name:',
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
                return `Target directory ${chalk.cyan(
                    answers.packageName
                )} is not empty. How do you want to proceed?`
            },
            choices: [
                { name: 'Overwrite', value: true },
                { name: 'Cancel', value: false },
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
