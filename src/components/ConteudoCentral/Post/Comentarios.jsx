export default function Comentarios (props){
    return(
        <div className="comentarios">
          <div className="more"><p>Ver todos os {props.quantComent} comentários</p></div>
          <div className="coment"><p><a href="#">{props.NamePerfilComent}</a> {props.coment}</p> <div className="separador"></div><span className="heartComent">{props.btnHeart}</span></div>
          <div className="coment"><p><a href="#">{props.NamePerfilComent2}</a> {props.coment2}</p> <div className="separador"></div><span className="heartComent">{props.btnHeart}</span></div>
          <div className="comentar"><p>Adicione um comentário</p> <div className="separador"></div> <span className="emoji">{props.emoji}</span></div>
        </div>
    )
}