const Login = require('../models/loginModel');

exports.index = (req, res) => {
  if (req.session.user) return res.render('user');
  // console.log(req.session.user); // debuga sessao do usuario logado
  res.render('login');
};

// todo retorno (loginModel) de uma async também é uma promisse, logo devemos usar async/await
exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login/index');
      });
      return;
    }
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(() => {
      return res.redirect('/login/index');
    });
  } catch (err) {
    return res.render('404');
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login/index');
      });
      return;
    }

    req.flash('success', 'Você logou no sistema com sucesso.');
    req.session.user = login.user;
    req.session.save(() => {
      return res.redirect('/login/index');
    });
  } catch (err) {
    return res.render('404');
    console.log(err);
  }
};

exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect('/');
}
