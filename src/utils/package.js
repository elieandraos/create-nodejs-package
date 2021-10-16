const isValidPackageName = (packageName) => {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
        packageName
    )
}

const toValidPackageName = (packageName) => {
    return packageName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/^[._]/, '')
        .replace(/[^a-z0-9-~]+/g, '-')
}

export { isValidPackageName, toValidPackageName }
