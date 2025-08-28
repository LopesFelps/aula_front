// import React from "react";
// import Button from "./Components/Button/Button";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Exemplo de Botões</h2>

//       <Button text="Salvar" />

//       <Button text="Excluir" bgColor="green" textColor="white" />

//       <Button
//         text="Cancelar"
//         bgColor="red"
//         textColor="yellow"
//         onClick={() => alert("Você clicou no botão vermelho!")}
//       />

//       <Button
//         text="Novo"
//         bgColor="purple"
//         textColor="white"
//         onClick={() => console.log("Botão roxo foi clicado!")}
//       />
//     </div>
//   );
// }

// export default App;

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

import React from "react";
import ProfileCard from "./Components/ProfileCard/ProfileCard";

function App() {
  const profiles = [
    {
      name: "Jorginho",
      role: "Professor",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Evandrinho",
      role: "Engenheiro",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Lucrecio",
      role: "Designer",
      image: "https://avatars.dicebear.com/api/adventurer/lucrecio.svg",
    },
    {
      name: "Nicanor",
      role: "Ator",
      image: "https://avatars.dicebear.com/api/avataaars/nicanor.svg",
    },
    {
      name: "Givanildo",
      role: "Bombeiro",
      image: "https://avatars.dicebear.com/api/adventurer/floresbela.svg",
    },
    {
      name: "Jujuzete",
      role: "Cuteleiro",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Juca",
      role: "Ourives",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Predino",
      role: "Pedreiro",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Josefino",
      role: "Pintor",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          role={profile.role}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
