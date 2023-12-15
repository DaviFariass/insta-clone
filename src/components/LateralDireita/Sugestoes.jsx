export default function Sugestoes (props){
    return(
        <div className="sugestoes">
            <img src={props.imgSugest} alt="" className="icon iconAside"/>
            <div className="spanSugest">
                <span>{props.nomeSugest}</span>
                <span>{props.seguido}</span>
            </div>
            <div className="separador"></div>
            <div className="seguir">
                <span>Seguir</span>
            </div>
        </div>
    )
}