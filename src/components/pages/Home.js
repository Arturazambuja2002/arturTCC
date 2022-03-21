import styles from './Home.module.css'
import Icone from '../../img/ilustracao.svg'
import Logo_Home from '../../img/Heading_Home.svg'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <div>
    <div className={styles.home_container}>
      <img className={styles.Logo_Home} src={Logo_Home} alt="Ilustration"></img>
      
      <img className={styles.Ilustracao_Home} src={Icone} alt="Savings" />
      
    </div>
    <div>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton className={styles.buttonExplore} to="/login" text="Faça Login" />
    </div>
    </div>
  )
}

export default Home
