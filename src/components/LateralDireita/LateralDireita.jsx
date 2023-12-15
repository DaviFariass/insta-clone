import './LateralDireita.css'
import './Usuario'
import './Sugestoes'
import Usuario from './Usuario'
import icon from '../../assets/fotoPerfilDavi.jpg'
import icon2 from '../../assets/fotoPerfilAjeitaLar.jpg'
import icon3 from '../../assets/fotoPerfilAutoConcept.jpg'
import icon4 from '../../assets/fotoPerfilCarol.jpg'
import icon5 from '../../assets/fotoPerfilJdmBrasil.jpg'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className='LateralDireita'>
            <Usuario 
            imgPerfil={icon}
            nome='davi_ssfa'
            nick='Davi Farias'
            />
            <div className='midAside'>
                <span className='midAsideChild1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='midAsideChild2'>Ver tudo</span>
            </div>
            <Sugestoes 
            imgSugest={icon2}
            nomeSugest="ajeitalar"
            seguido='Seguido(a) por martinha.ti'
            />
            <Sugestoes 
            imgSugest={icon3}
            nomeSugest="autoconceptbr"
            seguido='Seguido(a) por lowhype.br'
            />
            <Sugestoes 
            imgSugest={icon4}
            nomeSugest="carol.subbie"
            seguido='Seguido(a) por flowgaragebr'
            />
            <Sugestoes 
            imgSugest={icon5}
            nomeSugest="jdm.brazill"
            seguido='Seguido(a) por black_devil_c30'
            />
            <div className="direitos">
                <span><p>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos - Localizações - Idioma - Meta verified (fictício)</p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM VINICIUS YEH</p></span>
                <span> <p>Direitos Reservados a Vinicius Yeh</p> </span>
            </div>
        </div>
    )
}