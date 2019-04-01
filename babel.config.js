module.exports = {
    presets: [
        'react-app'
    ],
    plugins: [
        '@babel/proposal-optional-chaining',
        'lodash'
    ],
    env: {
        production: {
            plugins: [
                [
                    'transform-react-remove-prop-types',
                    {
                        ignoreFilenames: [
                            'node_modules'
                        ]
                    }
                ]
            ]
        }
    }
};
