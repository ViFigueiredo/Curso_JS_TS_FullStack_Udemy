
// Aula 63 - Tratando e lançando erros (try, catch, throw)

function soma (x,y) {
    if ( typeof(x) !== 'number' || typeof(y) !== 'number' ) {
        throw new Error('x e y precisam ser números.')
    }
    return x + y
}

try {
    console.log(soma(1,2));
    console.log(soma("1",2));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário!')
}

// Jamais expor os erros internos do código para o usuário final - vulnerabilidades!!!
// O ideal é armazenar em as informações no backend para tratá-los depois.