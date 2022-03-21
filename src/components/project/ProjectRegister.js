import { useState, useEffect } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectRegister.module.css'

function ProjectRegister({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const [logins, setLogins] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/logins', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLogins(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="name"
        text="Nome da empresa"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="text"
        text="Email para login"
        name="name"
        placeholder="Adicione seu email"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="password"
        text="Criar uma senha"
        name="name"
        placeholder="Crie uma senha"
        handleOnChange={handleChange}
        value={project.budget}
      />
    
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectRegister