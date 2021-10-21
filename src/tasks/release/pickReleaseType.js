import path from 'path'
import inquirer from 'inquirer'
import { dirExists } from '../../utils/fileSystem'
import { isValidPackageName } from '../../utils/package'

const pickReleaseType = async () => {
    const questions = [
        {
            type: 'list',
            name: 'releaseType',
            prefix: '',
            message: 'Pick a semantic release type:',
            // @todo: support prepatch, preminor, premajor and prerelease types
            choices: [
                { name: 'patch', value: 'patch' },
                { name: 'minor', value: 'minor' },
                { name: 'major', value: 'major' }
            ]
        },
    ]

    let answers = await inquirer.prompt(questions)
    return answers.releaseType
}

export default pickReleaseType
