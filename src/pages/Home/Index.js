import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';


function Home() {
  const [ usuario, setUsuario ] = useState("");
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => {
      const repositories = Response.data;
      const repositoriesName = []
      repositories.map((repository) =>{
        repositoriesName.push(repository.name)
      });
      localStorage.setItem("repositories", JSON.stringify(repositoriesName))
    });
  }
  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>  
    </S.Container>
  );
}

export default Home;