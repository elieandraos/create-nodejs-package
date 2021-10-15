#!/usr/bin/env node

const { prerequisitesCheck } = require('./../index')

const init = () => {
    console.log('cli in the process 🎉 🎉')
}

init()
prerequisitesCheck()
