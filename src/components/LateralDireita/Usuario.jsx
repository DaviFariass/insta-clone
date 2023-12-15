export default function Usuario (props){
    return(
        <aside>
            <div className="borderAside">
            <img src={props.imgPerfil} alt="" className="icon iconLateralDireita"/>
            </div>
            <div className="alignAside">
                <span className="nomeAside">{props.nome}</span>
                <span className="nickAside">{props.nick}</span>
            </div>
            <div className="separador"></div>
            <span className="mudar">Mudar</span>
        </aside>
    )
}