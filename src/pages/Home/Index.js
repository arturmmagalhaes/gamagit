import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'


function Home() {
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  const history = useHistory();
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(Response => {
      const repositories = Response.data;
      const repositoriesName = []
      repositories.map((repository) =>{
        repositoriesName.push(repository.name)
      });
      localStorage.setItem("repositories", JSON.stringify(repositoriesName))
      setErro(false);
      history.push('/repositories');
    })
    .catch(erro => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" 
        onKeyPress={e => {
          if(e.key === 'Enter'){
            handlePesquisa()
          }
        }} 
        placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button> 
        </S.Content>
        { erro ? <S.ErroMsg>Ocorreu um erro. Tente novamente!</S.ErroMsg> : '' } 
    </S.HomeContainer>
  );
}

export default Home;
