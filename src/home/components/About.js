import '../../App.css';
import { createComponent } from '@lit-labs/react'
import { SuperButton as SuperButtonWebComponent} from './super-button';
import React, { useState } from 'react';

const SuperButtonWC = createComponent( // Esto es el nombre de la etiqueta del componente

  {
    react: React,
    elementClass: SuperButtonWebComponent,
    tagName: 'super-button',
    events: { onEvento: 'message' }
  }
)

function About() {

  const [ message, setMessage] = useState('press the super button')

  return (
    <> 
    <SuperButtonWC nombre = {'Ismael'} onEvento = { (e) => setMessage(e.detail)} >
    </SuperButtonWC>
    <p>
      {message}
    </p>
    </>
  );
}

export default About;
