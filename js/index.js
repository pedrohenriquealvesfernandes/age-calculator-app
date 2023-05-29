const inputDia = document.getElementById('dia');
const inputMes = document.getElementById('mes');
const inputAno = document.getElementById('ano');
const flecha = document.getElementById('flecha');
const labelDia = document.querySelector('label[for="dia"]');
const labelMes = document.querySelector('label[for="mes"]');
const labelAno = document.querySelector('label[for="ano"]');
const spanAnos = document.getElementById('anos');
const spanMeses = document.getElementById('meses');
const spanDias = document.getElementById('dias');
const diaErro = document.getElementById('dia-erro');
const mesErro = document.getElementById('mes-erro');
const anoErro = document.getElementById('ano-erro');
const inputs = document.querySelectorAll('.inputs input');
const labels = document.querySelectorAll('.labels label');
const erroMensagem = document.querySelectorAll('.erro p');
const erroSpans = document.querySelectorAll('span .destaque')
const dataErro = document.getElementById('data-erro')







function limitarCaracteres(input, maxLength){
    if (input.value.length > maxLength){
        input.value = input.value.slice(0,maxLength)
    }
}

function validacao(){ 
    const diaValor = parseInt(inputDia.value)
    const mesValor = parseInt(inputMes.value)
    const anoValor = parseInt(inputAno.value)   

    function validarDiaMesAno(){  
        if (diaValor > 31 || diaValor <= 0){
            labelDia.style.color = 'hsl(0, 100%, 67%)'
            inputDia.style.color = 'hsl(0, 100%, 67%)'
            inputDia.style.borderColor = 'hsl(0, 100%, 67%)'
            inputDia.style.outline = 'none'
            diaErro.innerHTML = 'Must be a valid day' 
        } else {
            labelDia.style.color = ''
            inputDia.style.color = ''
            inputDia.style.borderColor = ''
            inputDia.style.outline = ''
            diaErro.innerHTML = ''         
        }
        if (mesValor > 12 || mesValor <= 0 ){
            labelMes.style.color = 'hsl(0, 100%, 67%)'
            inputMes.style.color = 'hsl(0, 100%, 67%)'
            inputMes.style.borderColor = 'hsl(0, 100%, 67%)'
            inputMes.style.outline = 'none'
            mesErro.innerHTML = 'Must be a valid month'
        } else {
            labelMes.style.color = ''
            inputMes.style.color = ''
            inputMes.style.borderColor = ''
            inputMes.style.outline = ''
            mesErro.innerHTML = ''         
        }
        if (anoValor > 2023 || anoValor <= 1900){
            labelAno.style.color = 'hsl(0, 100%, 67%)'
            inputAno.style.color = 'hsl(0, 100%, 67%)'
            inputAno.style.borderColor = 'hsl(0, 100%, 67%)'
            inputAno.style.outline = 'none'
            anoErro.innerHTML = 'Must be a valid year'             
        } else {
            labelAno.style.color = ''
            inputAno.style.color = ''
            inputAno.style.borderColor = ''
            inputAno.style.outline = ''
            anoErro.innerHTML = ''
        }
    }

    function validarData(){  
        const dataString = `${anoValor}-${mesValor}-${diaValor}`
        const m = moment(dataString, 'YYYY-MM-DD')
        if(m.isValid()){
            dataErro.innerHTML = ''
        }else{
            labelDia.style.color = 'hsl(0, 100%, 67%)'
            inputDia.style.color = 'hsl(0, 100%, 67%)'
            inputDia.style.borderColor = 'hsl(0, 100%, 67%)'
            inputDia.style.outline = 'none'
            labelMes.style.color = 'hsl(0, 100%, 67%)'
            inputMes.style.color = 'hsl(0, 100%, 67%)'
            inputMes.style.borderColor = 'hsl(0, 100%, 67%)'
            inputMes.style.outline = 'none'
            labelAno.style.color = 'hsl(0, 100%, 67%)'
            inputAno.style.color = 'hsl(0, 100%, 67%)'
            inputAno.style.borderColor = 'hsl(0, 100%, 67%)'
            inputAno.style.outline = 'none'
            dataErro.innerHTML = 'Must be a valid date'
        }
    }
    
    function validarSemValor(){
        valorVazio = false
        inputs.forEach((input, index) => {
            if (input.value.trim() === '') {
                labels[index].style.color = 'hsl(0, 100%, 67%)'
                input.style.borderColor = 'hsl(0, 100%, 67%)'
                input.style.outline = 'none'
                erroMensagem[index].innerHTML = 'This field is required'
                dataErro.innerHTML = ''
                valorVazio = true
            } else {
                input.style.color = ''    
            }       
        })
    }

    
    
    
    function calcularIdade(){
        const dataAtual = moment()   
        const diaFormatado = parseInt(inputDia.value)
        const mesFormatado = parseInt(inputMes.value)
        const anoFormatado = parseInt(inputAno.value)
        const dataFornecida = moment([anoFormatado, mesFormatado - 1, diaFormatado])
        const dias = dataAtual.diff(dataFornecida,'days')
       
     
        const duracao = moment.duration(dias,'days')
        const anoFinal = duracao.years()
        const mesFinal = duracao.months()
        const diaFinal = duracao.days()
    

        spanAnos.innerHTML = anoFinal
        spanMeses.innerHTML = mesFinal
        spanDias.innerHTML = diaFinal

        if(dataFornecida > dataAtual){
            dataErro.innerHTML = 'A data fornecida não pode ser maior que a data atual'
        }
        
    }

    validarDiaMesAno()
    validarData()   
    validarSemValor()

    const erroDiaMesAno = diaErro.innerHTML !== '' || mesErro.innerHTML !== '' || anoErro.innerHTML !== ''
    const erroSemValor = Array.from(erroMensagem).some((mensagem) => mensagem.innerHTML !== '')
    const erroData = dataErro.innerHTML !== ''

    calcularIdade() 
    
    if (!erroDiaMesAno && !erroSemValor && !erroData) {
        calcularIdade();
    }
    
}


flecha.addEventListener("click",()=>{
    validacao() 
})

















  




