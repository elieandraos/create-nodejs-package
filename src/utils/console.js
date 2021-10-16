import chalk from 'chalk'

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const respondOk = (message) => {
    console.log(chalk.green(`✔ ${message}`))
}

const abortWithMessage = (message) => {
    console.log(chalk.red(`✖ ${message}`))
    process.exit(1)
}

export { sleep, respondOk, abortWithMessage }
