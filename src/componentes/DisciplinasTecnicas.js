import dadosDisciplinasTecnicas from "../dados/dadosDisciplinasTecnicas";

function DisciplinasTecnicas(){
    return (
        <section className='disciplinas'>
            <header className='headerDisclinas'>
               <h1>DisciplinasTecnicas</h1>
            </header>
            <div className='constentDisciplinas'>
            { 
            dadosDisciplinasTecnicas.map(
            (item, index) =>(
            <article key={index}>
                <img src={item.Link_imagem}
                    alt={item.nome}
                    title={item.nome} />
               <h2>{item.nome} - {item.sigla}</h2>
              </article>
           ) 
        )     
    } 
  </div>
 </section> 

  )
}
export default DisciplinasTecnicas;
