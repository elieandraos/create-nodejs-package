import fs from 'fs'
import path from 'path'

const exists = (dir) => {
    return fs.existsSync(dir)
}

const empty = (dir) => {
    for (const file of fs.readdirSync(dir)) {
        const abs = path.resolve(dir, file)

        if (fs.lstatSync(abs).isDirectory()) {
            empty(abs)
            fs.rmdirSync(abs)
        } else {
            fs.unlinkSync(abs)
        }
    }
}

const copyDir = (srcDir, destDir) => {
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file)
        const destFile = path.resolve(destDir, file)
        copy(srcFile, destFile)
    }
}

const copy = (src, dest) => {
    const stat = fs.statSync(src)
    if (stat.isDirectory()) {
        copyDir(src, dest)
    } else {
        fs.copyFileSync(src, dest)
    }
}

export { exists, empty, copy }
