// @ts-check

/**
 * @typedef {Object} ExtendedOptions
 * @property {string} [$schema]
 * @property {boolean} [astroAllowShorthand]
 */

/** @type {import('prettier').Config & ExtendedOptions} */
export default {
    $schema: 'https://json.schemastore.org/prettierrc',
    arrowParens: 'avoid',
    bracketSameLine: true,
    bracketSpacing: true,
    endOfLine: 'lf',
    jsxSingleQuote: true,
    printWidth: 120,
    proseWrap: 'preserve',
    quoteProps: 'consistent',
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    useTabs: false,
    tabWidth: 4,

    // prettier-plugin-astro options
    astroAllowShorthand: true,
    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-tailwindcss', // MUST come last
    ],
    overrides: [
        { files: '*.astro', options: { parser: 'astro' } },
        { files: '*.json', options: { parser: 'json' } },
        { files: 'package.json', options: { parser: 'json', tabWidth: 2 } },
    ],
}
