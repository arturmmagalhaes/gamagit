import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';


function Home() {
  const [ usuario, setUsuario ] = useState("");
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => console.log(Response));
  }
  return (
    <S.Container>
      <p>{usuario}</p>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>  
    </S.Container>
  );
}

export default Home;
