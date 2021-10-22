import execa from 'execa'
import { getRootDir } from './../../utils/fileSystem'
import { respondOk, abortWithMessage } from './../../utils/console'

const publishToNpmRegistry = async (version) => {
    try {
        let registry = `//registry.npmjs.org/:_authToken ${process.env.NPM_TOKEN}`

        await execa('npm', ['config', 'set', registry], { cwd: getRootDir() })
        await execa('npm', ['publish', '--access', 'public'], {
            cwd: getRootDir(),
        })
        await respondOk(
            `published package version ${version} to npm registry 🚀🚀`
        )
    } catch (e) {
        abortWithMessage(e)
    }
}

export default publishToNpmRegistry
