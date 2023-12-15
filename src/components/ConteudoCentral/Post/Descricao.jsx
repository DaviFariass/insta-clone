export default function Descricao(props){
    return(
        <div className="Descricao">
            <span><a href="#">{props.NamePerfil}</a>{props.Descricao}</span>
        </div>
    )
}