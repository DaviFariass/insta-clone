export default function Curtidas(props){
    return(
        <div className="curtidas">
            <img src={props.miniIcon} alt="" style={{height:'.925rem',width: '.925rem', borderRadius:'50%'}}/>
            <span><p>Curtido por <a href="#" className='NameLike'>{props.NameLike}</a> e <a href="#">outras pessoas</a></p></span>
        </div>
    )
}