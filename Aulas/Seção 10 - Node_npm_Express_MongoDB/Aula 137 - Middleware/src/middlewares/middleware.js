// module.exports = (req, res, next) => {
exports.middlewareGlobal = (req, res, next) => {
    
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Figueiredo', 'Belesa')
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }

    next();
}

exports.outroMiddlewareGlobal = (req, res, next) => {
    console.log('Sou outro middleware');
    next();
}