module.exports = {
    apps: [
        {
            name: 'moment',
            script: 'dist/src/main.js',
            watch: true,
            ignore_watch: ['node_modules', 'logs'],
            instances: 3,
            exec_mode: 'cluster',
            interpreter: 'node',
        },
    ],
};
