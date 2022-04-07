const isValidPackageName = (packageName) => {
    return new RegExp('^[a-zA-Z0-9\\s]+$').test(packageName.toLowerCase())
}

const isValidPackageScope = (scope) => {
    return !scope ? true : scope.startsWith('@') &&
        new RegExp('^[a-zA-Z0-9\\s]+$').test(scope.substr(1).toLowerCase())
}

export { isValidPackageName, isValidPackageScope }
