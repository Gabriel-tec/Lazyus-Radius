
import React,{useState} from 'react';

import {Quadrado} from './Styled';
import {Layout} from './Styled';
import {CodigoRadius} from './Styled';
import {Header} from './Styled'

export default function App() {

    const [radiusGeral, setRadiusGeral] = useState(0);

    const [largura, setLargura] = useState(400);
    const [altura,setAltura] = useState(400);

    const [bordaEsquerda, setBordaEsquerda] = useState(0);
    const [bordaDireita, setBordaDireita] = useState(0);

    const [bordaBaixaEsquerda , setBordaBaixaEsquerda] = useState(0);
    const [bordaBaixaDireita , setBordaBaixaDireita] = useState(0);
 
    if(largura > 400){
        setLargura(400)
        alert("limite de 400px")
    }

    if(altura > 400){
        setAltura(400)
        alert("limite de 400px")
    }

    const handleBordaEsquerda = e =>{
        setBordaEsquerda(e.target.value)
    };

    const handleBordaDireita = e =>{
        setBordaDireita(e.target.value)
    };

    const handleBordaBaixaEsquerda = e => {
        setBordaBaixaEsquerda(e.target.value)
    }

    const handleBordaBaixaDireita = e => {
        setBordaBaixaDireita(e.target.value)
    }

    const handleLargura = (e) =>{
        setLargura(e.target.value)
    }
    const handleAltura = (e) =>{
        setAltura(e.target.value)
    }

    const handleRadiusGeral = (e) => {
        setRadiusGeral(e.target.value)
        setBordaEsquerda(e.target.value)
        setBordaDireita(e.target.value)
        setBordaBaixaEsquerda(e.target.value)
        setBordaBaixaDireita(e.target.value)
        
    }

    return(
        <div>
            <Header>
                <h1>Lazyus-Radius</h1>
                <h3>
                    Largura:<input type="number" 
                        value={largura}
                        onChange={handleLargura}
                    />
                </h3>
                <h3>
                    Altura:<input type="number" 
                        value={altura}
                        onChange={handleAltura}
                    />
                </h3>
                <h3>
                    Radius Geral:<input type="number" 
                        value={radiusGeral}
                        onChange={handleRadiusGeral}
                    />
                </h3>
            </Header>

                <Layout>
                    <input type="number"
                        id="text"
                        value={bordaEsquerda}
                        onChange={handleBordaEsquerda}
                    />
                    <input type="number"
                        value={bordaDireita}
                        onChange={handleBordaDireita}
                    />
                    <Quadrado                     
                        topoEsquerda={bordaEsquerda}
                        topoDireita={bordaDireita}
                        baixoEsquerda={bordaBaixaEsquerda}
                        baixoDireita={bordaBaixaDireita}
                        Largura={largura}
                        Altura={altura}
                    >
                    </Quadrado>
                    <input type="number"
                        value={bordaBaixaEsquerda}
                        onChange={handleBordaBaixaEsquerda}
                    />
                    <input type="number"
                        value={bordaBaixaDireita}
                        onChange={handleBordaBaixaDireita}
                    />       
                </Layout>             
                <CodigoRadius>
                    <code>
                        border-radius: {bordaEsquerda}px {bordaDireita}px {bordaBaixaEsquerda}px {bordaBaixaDireita}px;
                    </code>
                </CodigoRadius>
        </div>
    )
  }

