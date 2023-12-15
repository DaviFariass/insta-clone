export default function Content(props){
    return(
        <div className="content">
          <img src={props.img} alt="" className="ImgContent" style={{width:"100%"}}/>
        </div>
    )
}