//configuration module

module.exports = function(app, express){
    app.configure(function() {
        app.use(express.logger(':method :url :status'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(app.router);
    });

    app.configure('development', function() {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });

    app.configure('production', function() {
        app.use(express.errorHandler());
    });
};

