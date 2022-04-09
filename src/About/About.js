import React from 'react';
import './_About.scss';

const About = () => {
  return (
    <main className='about' id='about'>
      <div>
        <h2 className='about_h2'>Sobre mi</h2>
        <p className='about_p'>Hola, mi nombre es Juan y tengo 21 años. Soy un desarrollador Frontend que vive en Córdoba, Argentina. Comencé mi carrera como desarrollador web en el 2021 gracias a Coder House.</p>
        <p className='about_p'>Mi objetivo a corto plazo es seguir aprendiendo y convertirme en un desarrollador experto en Frontend mientras que mi ojetivo a largo plazo es aprender tanto Backend, para convertirme en un desarrollador Full-Stack, como también algoritmos y estructuras de datos.</p>
        <p className='about_p'>Actualmente estoy en busca de mi primer empleo en este sector mientras realizo una gran variedad de proyectos personales de distintas dificultades y sigo aprendiendo diariamente.</p>
      </div>
    </main>
  );
}

export default About;