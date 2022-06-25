const Login = require('../models/LoginModel')

//...login/index
exports.index = (req, res) => {
    if (req.session.user) return res.render('loginLogado');
    res.render('login');
}

//...login/register
exports.register = async (req, res) => {

    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash("success", 'Seu usuário foi criado com sucesso!');
        req.session.save(function () {
            return res.redirect('/login/index');
        });
        // res.send(login.errors);
    } catch (e) {
        console.log(e);
        return res.render('404')
    }
};

//...login/login
exports.login = async (req, res) => {

    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash("success", 'Usuário logado com sucesso!');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('/login/index');
        });
        // res.send(login.errors);
    } catch (e) {
        console.log(e);
        return res.render('404')
    }
};

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/');
};