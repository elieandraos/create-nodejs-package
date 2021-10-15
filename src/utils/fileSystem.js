import fs from 'fs'

const exists = (dir) => {
    return fs.existsSync(dir)
}

export { exists }
