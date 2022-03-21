import { useState, useEffect } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectLogin.module.css'

function ProjectLogin({ handleSubmit, btnText, projectData }) {
  
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }
  return (

    <form onSubmit={submit} className={styles.form}>
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira seu email"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="password"
        text="Senha"
        name="senha"
        placeholder="Insira sua senha"
        handleOnChange={handleChange}
        value={project.budget}
      />
    
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectLogin