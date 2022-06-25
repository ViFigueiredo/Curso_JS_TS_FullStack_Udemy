// module.exports = (req, res, next) => {
exports.middlewareGlobal = (req, res, next) => {
    
    // injeta um script em mais de uma variavel local
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddlewareGlobal = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res,next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa estar logado!');
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
};