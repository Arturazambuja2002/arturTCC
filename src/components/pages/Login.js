import ProjectLogin from '../project/ProjectLogin'
import './Login.module.css'
import { Link } from "react-router-dom";
import styles from './Login.module.css'

function Login(){
	return(
		<div className={styles.login_container}>
		<h1>Faça Login</h1>
		<h3>Sua empresa não possui cadastro?</h3><br/>
			<Link className={styles.btn} to="/register">Cadastre-se</Link>
	<ProjectLogin btnText="Logar"/>
	</div>
	)
}

export default Login