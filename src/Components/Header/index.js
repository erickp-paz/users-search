import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="title">Simple search Users</h1>
        <h2 className="sub-title">
          Por favor, insira o nome de usuário abaixo.
          <br />
          Em seguida, clique em "Repos" se quiser exibir a lista de repositórios
          do usuário, ou "Starred" para exibir a lista de repositório que o
          usuário deu uma "star."
        </h2>
      </header>
    </div>
  );
};

export default Header;
