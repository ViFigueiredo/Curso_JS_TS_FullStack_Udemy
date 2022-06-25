
// Aula 81 - Revisão do básico em Arrays

// Valor por referência de memória
//                   0           1       2         3
// const nome = ['Vinicius', 'Belesa', 'de', 'Figueiredo'];
const nome = new Array('Vinicius', 'Belesa', 'de', 'Figueiredo'); // método menos utilizado
console.log(nome);

function alteraValor(arr) {
	arr[2] = 'Silva'; 
	console.log(arr); 
}
// alteraValor(nome);

function deletaValor(arr) {
	delete arr[2];
	console.log(arr);
}
// deletaValor(nome);

function referenciaValor(arr) {
	const novo = arr; // possuem mesma referência de memória
	console.log(novo);
} 
// referenciaValor(nome);

function spreadValor(arr) {
	const spread = [...arr] // spread - adiciona todos elementos e remove a ref de memória
	console.log(spread);
} 
// spreadValor(nome);

function adicionaPrimeiroValor(arr) {    
	arr.unshift('Cybelle');
	console.log(arr);
}
// adicionaPrimeiroValor(nome);

function adicionaUltimoValor(arr) {    
	arr.push('Rebecka');
	console.log(arr);
}
// adicionaUltimoValor(nome);

function removePrimeiroValor(arr) {    
	arr.shift();
	console.log(arr);
}
// removePrimeiroValor(nome);

function removeUltimoValor(arr) {    
	arr.pop();
	console.log(arr);
} 
// removeUltimoValor(nome);

function fatiaValor(arr) {
	const fatia = arr[0].slice(0, -4);
	console.log(fatia);
} 
// fatiaValor(nome);

function converteValorArray() {
	const arr = 'Vinicius Belesa de Figueiredo'
	const convert = arr.split(' ');
	console.log(convert);
} 
// converteValorArray(nome);

function converteArrayValor(arr) {
	const convert = arr.join(' ');
	console.log(convert);
} 
converteArrayValor(nome);

function tamanhoArray(arr) {
	console.log('Contém: ',arr.length, 'elementos');
} 
// tamanhoArray(nome);

