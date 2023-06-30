import React, { useState,useEffect } from "react";

//custom hook para obtener los repositories
const useRepositories = () => {

  const [repositories,setRepositores] = useState(null)

  //trae los repositories haciendo una consulta a la api
  const fetchRepositories = async() => {
    const response = await fetch('http://192.168.1.48:5000/api/repositories')
    const json = await response.json()
    console.log(repositories)
    setRepositores(json)
  }

  //ejecuta el fetchrepositories cuando se inicializa la pantalla
  useEffect( () => {
    fetchRepositories()
  },[])

  //mapea los repositorios de la consulta
  const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []

  //retornando un objeto repositories que contiene los repositorios
  return {repositories:repositoriesNodes}
}

export default useRepositories