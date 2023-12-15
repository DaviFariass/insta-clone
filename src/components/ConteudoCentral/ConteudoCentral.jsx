import './ConteudoCentral.css'
import Itemstories from './Stories/ItemStories'
import Post from './Post/Post'
import iconStory2 from '../../assets/fotoPerfilCena.jpg'
import iconStory3 from '../../assets/fotoPerfilRapMais.jpg'
import iconStory4 from '../../assets/fotoPerfilLucas.jpg'
import iconStory5 from '../../assets/fotoPerfilPodPah.jpg'
import iconStory6 from '../../assets/fotoPerfilSkurt.jpg'
import iconStory7 from '../../assets/fotoPerfilPointGames.jpg'
import iconStory8 from '../../assets/fotoPerfilJe.jpg'
import iconStory9 from '../../assets/fotoPerfilProa.jpg'
import post1 from '../../assets/fotoPageAutoconcept.jpg'
import post2 from '../../assets/fotoPageAvantGarage.jpeg'
import post3 from '../../assets/fotoPageRockstar.jpg'
import post4 from '../../assets/fotoPageWiu.jpg'
import iconpost1 from '../../assets/fotoPerfilAutoConcept.jpg'
import iconpost2 from '../../assets/fotoPerfilAvantGarage.jpg'
import iconpost3 from '../../assets/fotoPerfilRockstar.jpg'
import iconpost4 from '../../assets/fotoPerfilWiu.jpg'

export default function ConteudoCentral(){
    return(
      <div className='ConteudoCentral'>
        <div className="Stories">
          <Itemstories nameText="cenafest..." icon={iconStory2}/>
          <Itemstories nameText="rapmais" icon={iconStory3}/>
          <Itemstories nameText="lucasinu..." icon={iconStory4}/>
          <Itemstories nameText="podpah" icon={iconStory5}/>
          <Itemstories nameText="skurtbrasil" icon={iconStory6}/>
          <Itemstories nameText="pointgames" icon={iconStory7}/>
          <Itemstories nameText="jovemsanti" icon={iconStory8}/>
          <Itemstories nameText="instituto..." icon={iconStory9}/>
        </div>
        <div className="Timeline">
          <Post 
          icon={iconpost1}
          nameUser="autoconcept"
          time="10 h"
          post={post1}
          miniIcon={iconStory3}
          NameLike='davi_far...'
          NamePerfil='autoconcept'
          Descricao='...'
          quantComent='200'
          NamePerfilComent='davi_farias'
          coment='Brabo Demaissss'
          NamePerfilComent2='lowhype.br'
          coment2='Muito lindo'
          />
          <Post 
          icon={iconpost2}
          nameUser="avantgardemotors"
          time="1 d"
          post={post2}
          miniIcon={iconpost1}
          NameLike='autoconcept'
          NamePerfil='avantgardemotors'
          Descricao='Mclaren 765LT na DESCOMUNAL cor 
          Lantana Purple 🚀
          Mais detalhes em breve!'
          quantComent='43'
          NamePerfilComent='drwhendelcoelho'
          coment='Tem ar condicionado kkkk'
          NamePerfilComent2='caiopatricio'
          coment2='Esse carro é perfeito!!!'
          />
          <Post 
          icon={iconpost3}
          nameUser="rockstargames"
          time="7 d"
          post={post3}
          miniIcon={iconStory7}
          NameLike='pointgames'
          NamePerfil='rockstargames'
          Descricao='Here we go again.
          Watch Grand Theft Auto VI Trailer 1 Now: youtube.com/rockstargames'
          quantComent='25.623'
          NamePerfilComent='ayoud_rahbani'
          coment='نلتقي في 2025 ❤️🙌 إن شاء الله'
          NamePerfilComent2='papatinho'
          coment2='2025 é sacanagem com crias..kkkk'
          />
          <Post 
          icon={iconpost4}
          nameUser="hotwiu"
          time="25 d"
          post={post4}
          miniIcon={iconStory2}
          NameLike='cena2k'
          NamePerfil='hotwiu'
          Descricao='Hey babe, sou eu… Wiuzinho ❤️‍🔥'
          quantComent='457'
          NamePerfilComent='mcdaniel'
          coment='Você e gigante irmão'
          NamePerfilComent2='qgtuezin30'
          coment2='Como não transmitiram o show dele mano 😢'
          />
        </div>
      </div>
    )
}