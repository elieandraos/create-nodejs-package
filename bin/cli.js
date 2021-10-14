#!/usr/bin/env node

const { prerequisitesCheck } = require('./../src/index')

const init = () => {
    console.log('cli in the process 🎉 🎉')
}

init()
prerequisitesCheck()
