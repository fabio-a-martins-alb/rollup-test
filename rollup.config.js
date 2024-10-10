import alias from'@rollup/plugin-alias'

export default 
    {
        input: 'src/index.js',
        output: {
            dir: 'output',
            format: 'cjs'
        },
        plugins: [
            alias({
                entries: {'./hello': './src/dif/hello.js' },
            })
        ]
    }
