export default function BtnsPost(props){
    return(
        <div className="botoes">
          <span className="btnHeart">{props.btnHeart}</span>
          <span className="btnComment">{props.btnComment}</span>
          <span className="btnSend">{props.btnSend}</span>
          <div className="separador"></div>
          <span className="btnSave">{props.btnSave}</span>
        </div>
    )
        
}