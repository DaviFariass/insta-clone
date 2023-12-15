export default function Headerpost(props){
    return(
        <div className="Headerpost">
            <div className="HeaderUsuario">
                <div className="ImgUsuarioBorder">
                    <div className="ImgUsuarioBorder2">
                        <img src={props.icon} alt="" style={{height:"35px", width:" 35px"}} className='icon'/>
                    </div>
                </div>
                <div className='Component-Headerpost Component-Headerpost1'>
                    <span className='NameUsuario'><p>{props.NameUsuario}</p></span>
                </div>
                <div className='Component-Headerpost Component-Headerpost2'> 
                    <span className='dot'>{props.dot}</span>
                    <span className='Data'><p>{props.Data}</p></span>
                </div>
                <div className="separador"></div>
                <div className='Component-Headerpost3'>
                    <span className='dots'>{props.dots}</span>
                </div>
            </div>
        </div>
    )
}