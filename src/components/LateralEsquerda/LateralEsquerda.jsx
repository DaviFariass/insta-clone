import ItemMenuLateralEsquerda from './ItemMenuLateralEsquerda'
import './LateralEsquerda.css'
import eu from'../../assets/fotoPerfilDavi.jpg'
import {GoHomeFill} from 'react-icons/go'
import {FiSearch} from 'react-icons/fi'
import {ImCompass2} from 'react-icons/im'
import {CgClapperBoard} from 'react-icons/cg'
import {BsSend} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPlusSquare} from 'react-icons/bs'
import {HiMiniBars3} from 'react-icons/hi2'
import instagram from'../../assets/logo.png'

export default function LateralEsquerda(){
    return(
        <div className='LateralEsquerda'>
            <div className="logoLateralEsquerda"><img src={instagram} alt="" style={{width:"100px"}}/></div>
            <nav className="menuLateralEsquerda">
                <ul>
                    <ItemMenuLateralEsquerda
                    icone={<GoHomeFill style={{height:"25px", width:"25px"}} />}
                    texto="Página inicial" />

                    <ItemMenuLateralEsquerda
                    icone={<FiSearch style={{height:"25px", width:"25px"}}/>} 
                    texto="Pesquisa" />

                    <ItemMenuLateralEsquerda
                    icone={<ImCompass2 style={{height:"25px", width:"25px"}}/>} 
                    texto="Explorar" />

                    <ItemMenuLateralEsquerda
                    icone={<CgClapperBoard style={{height:"25px", width:"25px"}}/>} 
                    texto="Reels" />

                    <ItemMenuLateralEsquerda
                    icone={<BsSend style={{height:"25px", width:"25px"}}/>} 
                    texto="Mensagens" />

                    <ItemMenuLateralEsquerda
                    icone={<AiOutlineHeart style={{height:"25px", width:"25px"}}/>} 
                    texto="Notificações" />

                    <ItemMenuLateralEsquerda
                    icone={<BsPlusSquare style={{height:"25px", width:"25px"}}/>} 
                    texto="Criar"
                    />

                    <li>
                        <span className="iconeSimples"><img src={eu} alt="" style={{height:'1.625rem', width:'1.625rem', borderRadius:'50%'}}/></span>
                        <span className="textoProp">Perfil</span>
                    </li>   
                    
                    <div className='align-menuItem'>
                        <ItemMenuLateralEsquerda
                        icone={<HiMiniBars3 style={{height:"25px", width:"25px"}} />}
                        texto="Mais"
                        />
                    </div>
                </ul>
            </nav>
        </div>
    )
}