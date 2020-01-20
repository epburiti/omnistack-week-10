import React, { useEffect, useState } from 'react';
import api from './services/api';


import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



// tres conceitos principais do React
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: informação mantida pelo componente (lembrar: imutabilidade)

// mais informações
//Fragment: tags sem sem nomenclatura

// no react utiliza-se as declarações imperativas no controle de dom no fluig uzamos declarativa

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },

      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log('res: ', response.data)
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form >
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </div>


          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Longitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>

          </div>

          <button type="submit" onClick={handleAddDev}>Salvar
          </button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="http://franquia.globalmedclinica.com.br/wp-content/uploads/2016/01/investidores-img-02-01.png" alt="Perfil imagem" />
              <div className="userInfo">
                <strong>Erick Buriti</strong>
                <span>ReactJs, Node.js, Js, </span>
                <p>Desenvolvedor Front End no Grupo IV2</p>
                <a href="https://github.com/epburiti">Acessar perfil no gitHub</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="http://franquia.globalmedclinica.com.br/wp-content/uploads/2016/01/investidores-img-02-01.png" alt="Perfil imagem" />
              <div className="userInfo">
                <strong>Erick Buriti</strong>
                <span>ReactJs, Node.js, Js, </span>
                <p>Desenvolvedor Front End no Grupo IV2</p>
                <a href="https://github.com/epburiti">Acessar perfil no gitHub</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="http://franquia.globalmedclinica.com.br/wp-content/uploads/2016/01/investidores-img-02-01.png" alt="Perfil imagem" />
              <div className="userInfo">
                <strong>Erick Buriti</strong>
                <span>ReactJs, Node.js, Js, </span>
                <p>Desenvolvedor Front End no Grupo IV2</p>
                <a href="https://github.com/epburiti">Acessar perfil no gitHub</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>

  );
}

export default App;
