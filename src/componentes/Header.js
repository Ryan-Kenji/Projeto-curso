import { Link } from "react-router-dom";
function Header() {


    return (
        <header>
            <div className="headertopo">
                <h1>Curso Técnico em Desenvolvimento de Sistema</h1>
            </div>
            <nav className="headerMenu">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/sobreCurso"> Sobre o Curso</Link></li>
                    <li><Link to = "/disciplinasCurrivulares"> disciplinas Curriculares</Link></li>
                    <li><Link to = "/disciplinasTecnicas"> disciplinas Técnicas</Link></li>
                    <li><Link to = "/equipe">Equipe</Link></li>
                    <li><Link to = "/ListarDisciplinaTecnica">ListarDisciplinaTecnica</Link></li>
                    <li><Link to = "/ListarDisciplinaCurricular">ListarDisciplinaCurricular</Link></li>
                    
                </ul>
            </nav>
        
        </header>

    )

}
export default Header;