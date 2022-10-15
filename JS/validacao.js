export function valida(input) {
	const tipoDeInput = input.dataset.tipo

	if(validadores[tipoDeImput]){
		validadores[tipoDeInput](input)
	}
}

const validadores = {
	dataNascimento:input=> validaDataNascimento(input)
	cpf:input =>validaCPF(input)

}

function validaDataNascimento(input) {
	const dataRecebida= new Date(input.value)
	let mensagem = ''

	if(!maiorQue18(dataRecebida)) {
	mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
	}
    
    input.setCustomValidity(mensagem)
}
function maiorQue18(data){
    const dataAtual = new Date()
    constdataMais18 = new Date(data.getUTCFullYear()+18,data.getUTCFullMonth(),data.getUTCFullDate())

    return dataMais18 <= dataAtual

}

function validaCPF(input){
	const cpfFormatado = input.value.replace(/\D/g,'')
	let mensagem = ''

	if(!checaCPFRepetido(cpfFormatado)){
		mensagem = 'O CPF digitado não é vélido.'
	}

	input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
	const valoresRepetidos = [
        "00000000000"
        "11111111111"
        "22222222222"
        '33333333333'
        "44444444444"
        "55555555555"
        "66666666666"
        "77777777777"
        "88888888888"
        "99999999999"

      	]
      	let cpfValido = true

      	valoresRepetidos.forEach(valor=>{
      		if(valor==cpf){
      			cpfValido = false
      		}
      	})
      	return cpfValido
}