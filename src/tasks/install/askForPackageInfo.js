import path from 'path'
import inquirer from 'inquirer'
import { dirExists } from '../../utils/fileSystem'
import { isValidPackageName } from '../../utils/package'

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
            message:
                'A directory with the same name already exists. Do you wish to overwrite it?',
            choices: [
                { name: 'Overwrite', value: true },
                { name: 'Cancel', value: false },
            ],
            when: (answers) => {
                return dirExists(answers.packageName)
            },
        },
    ]

    let answers = await inquirer.prompt(questions)
    let root = path.join(process.cwd(), answers.packageName)
    let template = 'vanilla'
    let templateDir = path.join(__dirname, `../../templates/${template}`)

    return {
        ...answers,
        root: root,
        templateDir: templateDir,
    }
}

export default askForPackageInfo
