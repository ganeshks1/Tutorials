import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Photo from "./Photo";

function App() {
  console.log("hello World");
  let myObject = [
    {
      firstName: "Ganesh",
      lastName: "Sharma",
      image:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      firstName: "Aarav",
      lastName: "Sharma",
      image:
        "https://media.istockphoto.com/id/885944552/photo/vintage-tin-toy-robot-with-computer-board-artificial-intelligence-concept.jpg?s=612x612&w=is&k=20&c=MxqcKYd7cGWXH-PwhKjB_eiGfm4296H2SkbJ76IzZmo=",
    },
    {
      firstName: "Yash",
      lastName: "Verma",
      image:
        "https://media.istockphoto.com/id/1089279492/photo/robot-toy-in-front-of-program-code.jpg?s=612x612&w=is&k=20&c=88Svf6QeuQIMWrl0j1uvEqzQukph106KnICKsl8Z0o8=",
    },
  ];

  return (
    <div className="container">
      <Photo
        userName={myObject[0].firstName}
        surName={myObject[0].lastName}
        image={myObject[0].image}
      />
      <Photo
        userName={myObject[1].firstName}
        surName={myObject[1].lastName}
        image={myObject[1].image}
      />
      <Photo
        userName={myObject[2].firstName}
        surName={myObject[2].lastName}
        image={myObject[2].image}
      />
    </div>
  );
}

export default App;
