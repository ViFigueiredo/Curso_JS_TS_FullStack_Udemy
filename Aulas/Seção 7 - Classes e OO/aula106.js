
// Aula 106 - Validação CPF utilizando classes

// Método 1
// function main() {

//     const insiraCPF = '705.484.450-52'; // válido - com digitos
//     // const insiraCPF = '70548445052'; // válido - sem digitos
//     // const insiraCPF = '705484450'; // inválido - < 11 digitos
//     // const insiraCPF = '7054844505252'; // inválido - > 11 digitos
//     // const insiraCPF = '777.777.777.77'; // inválido - numeros sequenciais com digitos
//     // const insiraCPF = '77777777777'; // inválido - numeros sequenciais sem digitos

//     const cpf = new ValidaCPF(insiraCPF);
//     if (cpf.Valida()) {
//         console.log('CPF válido!');
//     } else {
//         console.log('CPF inválido!');
//     }
// }

// class ValidaCPF {
//     constructor(cpfEnviado) {
//         Object.defineProperty(this, 'cpfLimpo', {
//             enumerable: true,
//             get: function () {
//                 return cpfEnviado.replace(/\D+/g, '');
//             }
//         });
//     }

//     Valida() {
//         const cpfParcial = this.cpfLimpo.slice(0, -2);
//         const digito1 = this.criaDigito(cpfParcial);
//         const digito2 = this.criaDigito(cpfParcial + digito1);
//         const novoCPF = cpfParcial + digito1 + digito2;
//         if (!this.cpfLimpo) return false;
//         if (typeof this.cpfLimpo === 'undefined') return false;
//         if (this.cpfLimpo.length !== 11) return false;
//         if (this.isSequencia()) return false;
//         return novoCPF === this.cpfLimpo;
//     }

//     isSequencia() {
//         return this.cpfLimpo === this.cpfLimpo[0].repeat(this.cpfLimpo.length);;
//     }

//     criaDigito(cpfParcial) {
//         const cpfArray = Array.from(cpfParcial);
//         let regressivo = cpfArray.length + 1;
//         const total = cpfArray.reduce((ac, val) => {
//             ac += (regressivo * Number(val));
//             regressivo--;
//             return ac;
//         }, 0);
//         let digito = 11 - (total % 11);
//         return digito > 9 ? '0' : String(digito);
//     }
// }

// main();

/************************************************************************************ */

// Método 2
// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      });
    }
  
    éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.éSequência()) return false;
      this.geraNovoCpf();
  
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
  let validacpf = new ValidaCPF('070.987.720-03');
  // validacpf = new ValidaCPF('999.999.999-99');
  
  if (validacpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }
  


