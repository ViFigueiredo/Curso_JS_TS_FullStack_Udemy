// module.exports = (req, res, next) => {
exports.middlewareGlobal = (req, res, next) => {
    
    // injeta um script em mais de uma variavel local
    res.locals.umaVariavelLocal = 'Este é o valor da variave local';
    

    next();
}

exports.outroMiddlewareGlobal = (req, res, next) => {
    // console.log('Sou outro middleware');
    next();
}