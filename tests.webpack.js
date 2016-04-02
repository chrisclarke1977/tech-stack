var tests = [];
for (var file in window.__karma__.files) {
    if (/-test\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/src',
    paths: {
    },
    shim: {
    },
    deps: tests,
    callback: window.__karma__.start
});
