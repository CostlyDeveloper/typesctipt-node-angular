// Init Modules
const {src, dest, watch, task, series, parallel} = require('gulp');
const ts                                         = require('gulp-typescript');
const nodemon                                    = require('gulp-nodemon');

// File Paths
const files = {
    serverPath: './server/**/*.ts',
    dependenciesPath: './dependencies/**/*.ts',
}

const serverTS = ts.createProject('./server/tsconfig.json');
const dependenciesTS = ts.createProject('./dependencies/tsconfig.json');

// tasks
function backendTask() {
    return serverTS.src()
        .pipe(serverTS())
        .js.pipe(dest('dist/server/'));
}

function dependenciesTask() {
    return dependenciesTS.src()
        .pipe(dependenciesTS())

        .js.pipe(dest('dist/dependencies/'));
}

function nodemonTask() {
    return task(nodemon({
        script: 'dist/server/server.js', ext: 'js', env: {'NODE_ENV': 'development'}
    }));
}

function watchTask() {
    return watch([files.serverPath, files.dependenciesPath], parallel(backendTask, dependenciesTask));
}

exports.default = parallel(series(parallel(backendTask, dependenciesTask), watchTask), nodemonTask)

