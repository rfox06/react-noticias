import React, {Fragment, useState, useEffect} from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // definir la categori y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ru&category=${categoria}&apiKey=6955a98926bc43439e30f33065a3af6c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    }
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='buscador de noticias'
      />
      <div className="container white ">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
          
      </div>
    </Fragment>
  );
}

export default App;
