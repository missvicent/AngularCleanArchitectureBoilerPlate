const config = {
    semi: true,
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'all',
    arrowParens: 'avoid',
    endOfLine: 'auto',
    bracketSpacing: true,
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'angular',
            }
        }
    ]
}

module.exports = {
    config 
}