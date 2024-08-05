import React, { useState } from "react";
import "./App.css";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Componente para la sección de proyectos
const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      link: "#",
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      link: "#",
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente principal del portfolio
const App = () => {
  // Estado para el color de fondo
  const [bgColor, setBgColor] = useState("#000000");
  const [ltColor, setLtColor] = useState("#FDBF60");

  // Función para cambiar el color de fondo y la letra
  const changeBackgroundColor = () => {
    const colors = ["#FDBF60", "#000000"];

    // Alternar el color de fondo
    const newBgColor = bgColor === colors[0] ? colors[1] : colors[0];
    setBgColor(newBgColor);

    // Alternar el color de la letra
    const newLtColor = ltColor === colors[0] ? colors[1] : colors[0];
    setLtColor(newLtColor);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: ltColor }}>
      <header>
        <h1>Mi Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre Mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>Sobre Mí</h2>
        <p>
          Hola, soy [Tu Nombre]. Soy un desarrollador apasionado por la
          tecnología y el diseño. Aquí encontrarás algunos de mis proyectos más
          recientes.
        </p>
      </section>
      <Projects />
      <button className="color-button" onClick={changeBackgroundColor}>
        Cambiar Color de Fondo
      </button>
      <footer>
        <p>&copy; 2024 [Tu Nombre]. Todos los derechos reservados.</p>
        <section>
          <h2>Contacto</h2>
          <nav>
            <ul>
              <li>
                <a
                  className="animated-button"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWWlvDzgQglhFTBVrMHrjLRskpRVmFQwfrdwpmsbdPWnDbsPgSrZzLhtBDVgQqcGLPhg"
                >
                  <IoIosMail color="red" />
                </a>
              </li>
              <li>
                <a
                  className="animated-button"
                  href="https://wa.me/541151220207/?text=Hola%20te%20quiera%20contactar"
                  target="_blank"
                >
                  <FaWhatsapp color="Green" />
                </a>
              </li>
              <li>
                <a
                  className="animated-button"
                  href="https://github.com/Nicomartinez07"
                >
                  <FaGithub color="black" />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </div>
  );
};

export default App;
