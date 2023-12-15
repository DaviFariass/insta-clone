import './Headerpost'
import './Content'
import './BtnsPost'
import './Descricao'
import './Comentarios'

import Headerpost from './Headerpost'
import {BsThreeDots} from 'react-icons/bs'
import {GoDotFill} from 'react-icons/go'
import Content from './Content'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BsSend} from 'react-icons/bs'
import {LiaBookmark} from 'react-icons/lia'
import {BsEmojiSmile} from 'react-icons/bs'
import BtnsPost from './BtnsPost'
import Curtidas from './Curtidas'
import Descricao from './Descricao'
import Comentarios from './Comentarios'

export default function Post(props){
    return(
    <div className="Post">
        <Headerpost
        NameUsuario={props.nameUser}
        icon={props.icon}
        Data={props.time}
        dot={<GoDotFill style={{height:"5px"}}/>}
        dots={<BsThreeDots style={{height:"30px", cursor:'pointer'}}/>}
        />
        <Content 
        img={props.post}
        />
        <BtnsPost
        btnHeart={<AiOutlineHeart style={{fontSize:'29px', cursor:'pointer'}}/>}
        btnComment={<FaRegComment style={{fontSize:'26px', cursor:'pointer'}}/>}
        btnSend={<BsSend style={{fontSize:'24px', cursor:'pointer'}}/>}
        btnSave={<LiaBookmark style={{fontSize:'35px', cursor:'pointer'}}/>}
        />
        <Curtidas
        miniIcon={props.miniIcon}
        NameLike={props.NameLike}
        />
        <Descricao 
        NamePerfil={props.NamePerfil}
        Descricao={props.Descricao}
        />
        <Comentarios 
        quantComent={props.quantComent}
        NamePerfilComent={props.NamePerfilComent}
        coment={props.coment}
        NamePerfilComent2={props.NamePerfilComent2}
        coment2={props.coment2}
        btnHeart={<AiOutlineHeart style={{cursor:'pointer'}}/>}
        emoji={<BsEmojiSmile style={{cursor:'pointer'}}/>}
        />
    </div>  
    )
}