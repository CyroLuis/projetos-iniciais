


export default function View({pessoas, updatePessoas}){


    function deletePesoa(id) {
            const novaPessoa = pessoas.filter((p) => p.id !== id)
            updatePessoas(novaPessoa)

    }


return(
<>
<table>
<tr>
    <th>Id</th>
<th>Nome</th>
<th>Email</th>
<th>Idade</th>
</tr>

{pessoas.map((pessoa, index)=>
<tr key={index}>
    <td>{pessoa.id}</td>
    <td>{pessoa.nome}</td>
    <td>{pessoa.email}</td>
    <td>{pessoa.idade}</td>
    <td><button onClick={()=> deletePesoa(pessoa.id)} type='button'>deletar</button></td>
</tr>


)}

</table>



</>


)

}