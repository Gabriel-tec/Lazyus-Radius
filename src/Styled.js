import styled from 'styled-components';

export const Quadrado = styled.main`
    border-radius: ${props => `${props.topoEsquerda}px`} ${props => `${props.topoDireita}px`} ${props => `${props.baixoEsquerda}px`} ${props => `${props.baixoDireita}px`};
    width: ${props => `${props.Largura}px`};
    height: ${props => `${props.Altura}px`};
    box-shadow: 2px 2px 4px black;
    margin: 2px;
`
export const Layout = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 400px;
        input{
            margin: 10px;
            width: 70px; 
            padding: 5px;
            margin-right: 105px;
        }
`  
export const CodigoRadius = styled.div`
    margin-top: 130px;
    font-size: 30px;
    text-align: center;
`
export const Header = styled.main`
    font: normal 20px arial;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
        h1{
            width: 100%;
            text-align: center;
            text-decoration: underline;
            
        }
        h3{
            margin: 10px;
            input{
                height: 30px;
                font-size: 20px;
            }
        }
`