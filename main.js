const num1=document.getElementById('numero1')
const num2=document.getElementById('numero2')
const resultado=document.getElementById('resultado')


const Osuma = ()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
     resultado.value=suma(valor1,valor2)
    
}

const Oresta = ()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=resta(valor1,valor2)
}

const Omultiplica = ()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=multiplica(valor1,valor2)
}

const Odivide = ()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=divide(valor1,valor2)
}

const suma=(n1,n2)=>{
    return n1+n2

}

const resta=(n1,n2)=>{
    return n1-n2
}

const multiplica=(n1,n2)=>{
    return n1*n2
}

const divide=(n1,n2)=>{
    return n1/n2
}
