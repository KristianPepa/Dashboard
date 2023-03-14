module.exports = {
    style: {
        postcss: {
            plugins: [
                require('taildwindcss'),
                require('autoprefixer')
            ],
        },
    },
};