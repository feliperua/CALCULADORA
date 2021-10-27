const num1=document.getElementById('numero1')
const num2=document.getElementById('numero2')
const resultado=document.getElementById('resultado')
const btnsuma=document.getElementById('btn-suma')
const btnresta=document.getElementById('btn-resta')
const btnmultiplica=document.getElementById('btn-multiplica')
const btndivide=document.getElementById('btn-divide')

btnsuma.addEventListener('click',()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=suma(valor1,valor2)
})




btnresta.addEventListener('click',()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=resta(valor1,valor2)
})

btnmultiplica.addEventListener('click', ()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=multiplica(valor1,valor2)
})

btndivide.addEventListener('click',()=>{
    const valor1=Number(num1.value)
    const valor2=Number(num2.value)
    resultado.value=divide(valor1,valor2)
})

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
