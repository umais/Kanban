//configuration module

module.exports = function(app, express){
    app.configure(function() {

    });

    app.configure('development', function() {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });

    app.configure('production', function() {
        app.use(express.errorHandler());
    });
};

