import styles from './Register.module.css'
import ProjectRegister from '../project/ProjectRegister'

function Register(){
    return(
        <div className={styles.login_container}><h1>Faça cadastro da sua empresa</h1>
        <ProjectRegister btnText="Cadastrar"/>
        </div>
    )
}

export default Register