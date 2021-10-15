const isValidPackageName = (packageName) => {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
        packageName
    )
}

export {
    isValidPackageName
}
