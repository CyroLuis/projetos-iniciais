import {useState} from "react"
import View from "./View"

export default function Formulario(){

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [idade, setIdade] = useState('')

const [pessoas, setPessoas] = useState([])


function cadastraPessoa(formEvent){

//formEvent.preventDefault();

const ultimaPessoa = pessoas[pessoas.length - 1]
const id = ultimaPessoa ? ultimaPessoa.id + 1 : 1

    const novaPessoa = {
            id:id,
            nome: nome,
            email: email,
            idade: idade

    }



   // const array = pessoas;
   // array.push(novaPessoa)
    //setPessoas(array)

    setPessoas([...pessoas, novaPessoa])

}

console.log(pessoas)

    return(
<div>

<h1>cadastro</h1>
<form onSubmit={(formEvent) => cadastraPessoa(formEvent)}>
<label>Nome:</label>
<input value={nome} onChange={(e)=> setNome(event.target.value)} type="text" name="nome" id="nome"/>
<label>Email:</label>
<input value={email} onChange={(e)=> setEmail(event.target.value)} type="email" nome="email" id="email"/>
<label>idade:</label>
<input value={idade} onChange={(e)=> setIdade(event.target.value)} type="number" nome="idade" id="idade"/>
<button type="button" onClick={()=>cadastraPessoa()}>Enviar</button>





</form>
<h2>Pessoas</h2>
<View pessoas={pessoas} updatePessoas={(novaPessoa) => setPessoas(novaPessoa)}/>

</div>

    )
}