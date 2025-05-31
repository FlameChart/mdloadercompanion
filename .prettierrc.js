export default {
    semi: true,
    singleQuote: true,
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    plugins: [
        'prettier-plugin-toml',
        'prettier-plugin-organize-attributes',
        'prettier-plugin-packagejson',
        'prettier-plugin-tailwindcss',
    ],
    tailwindStylesheet: './src/App.css',
};
