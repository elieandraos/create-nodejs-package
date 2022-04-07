import path from 'path'
import inquirer from 'inquirer'
import _ from '@elieandraos/cli-tools'
import {isValidPackageName, isValidPackageScope} from '../../utils/package'

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
            when: ({ packageName }) => {
                return _.exists(packageName)
            },
        },
        {
            type: 'input',
            name: 'packageScope',
            prefix: '',
            message: '\nEnter the package scope (optional):',
            validate: (value) => {
                return isValidPackageScope(value)
                    ? true
                    : 'Package scope must be alphanumeric and starts with "@"'
            },
        },
    ]

    let answers = await inquirer.prompt(questions)

    let { packageName } = answers
    let root = path.join(process.cwd(), packageName)
    let template = 'vanilla'
    let templateDir = path.join(__dirname, `../../templates/${template}`)

    return {
        ...answers,
        root: root,
        templateDir: templateDir,
    }
}

export default askForPackageInfo
