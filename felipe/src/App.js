import React from "react";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Exemplo de Botões</h2>

      <Button text="Salvar" />

      <Button text="Excluir" bgColor="green" textColor="white" />

      <Button
        text="Cancelar"
        bgColor="red"
        textColor="yellow"
        onClick={() => alert("Você clicou no botão vermelho!")}
      />

      <Button
        text="Novo"
        bgColor="purple"
        textColor="white"
        onClick={() => console.log("Botão roxo foi clicado!")}
      />
    </div>
  );
}

export default App;


// import Person from './Components/Person/Person';
// function App() {
//  return (
//  <div>
//  <Person name="Aristeu" age="16"
// email= "ari@mail.com" />
//  </div>
//  );
// }
// export default App;
