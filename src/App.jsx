import LateralEsquerda from './components/LateralEsquerda/LateralEsquerda'
import ConteudoCentral from './components/ConteudoCentral/ConteudoCentral'
import LateralDireita from './components/LateralDireita/LateralDireita'
import './App.css'

function App() {

  return (
    <main>
      <LateralEsquerda />
      <ConteudoCentral />
      <LateralDireita />
    </main>
  )
}

export default App