
// Ler e retornar todas as pastas no diretorio
// Uso de promise para tornar a pesquisa assincrona

const fs = require('fs').promises;
const path = require('path'); // retorna o caminho absoluto

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
    // walk(files);
}

// lista os arquivos e pastas no diretorio inserido mas não retorna os filhos destes
async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/\node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if ((!/\.css$/g.test(fileFullPath)) &&
            (!/\.html$/g.test(fileFullPath))
        )
            continue;

        // console.log(fileFullPath, stats.isDirectory());
        console.log(fileFullPath);
    }
}

// lista os arquivos e pastas no diretorio inserido mas não retorna os filhos destes
// function walk(files) {
//     for (let file in files) {
//         console.log(files);
//     }
// }

readdir('V:/Programação/Repositórios/Cursos/Curso_JS_TS_FullStack_Udemy');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));