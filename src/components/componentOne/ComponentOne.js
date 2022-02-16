import React from "react";
import styled from "styled-components";
import { useUserStoreFacade } from "../../state/hooks/user.store.hook";

const Card = styled.div`
  width: 240px;
  height: 216px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  padding-top: 44px;
  background-color: #fafafa;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
  text-align: center;
`;

export default function ComponentOne(props) {
  const [state, nome, setNome, novoNome] = useUserStoreFacade();

  return (
    <Card>
      <h3>Bem-vindo a {state.detail.name}!</h3>
      <p>Digite o novo nome da loja aqui:</p>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button type="button" onClick={() => novoNome(nome)}>
        Trocar nome
      </button>
    </Card>
  );
}
