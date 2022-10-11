export function valida(input) {
	const tipoDeInput = input.dataset.tipo

	if(validadores[tipoDeImput]){
		validadores[tipoDeInput](input)
	}
}

const validadores = {
	dataNascimento:input=> validaDataNascimento(input)

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