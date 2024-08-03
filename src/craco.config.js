const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color':'#163665',
                            // '@border-color-base': 'rgba(0,0,0,0.49)'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
