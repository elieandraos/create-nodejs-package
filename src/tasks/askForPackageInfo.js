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
            type: 'confirm',
            name: 'override',
            prefix: '',
            message: (answers) => {
                return `Target directory ${answers.packageName} is not empty. Remove existing files and continue?`
            },
            when: (answers) => {
                return exists(answers.packageName)
            },
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers
}

export default askForPackageInfo
