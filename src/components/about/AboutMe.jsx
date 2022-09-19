import { ContainerAbout } from './stylesAbout';


function AboutMe() {
    return (
        <ContainerAbout>
            <div className='container-aboutme'>
                <div>
                    <div className='title'>
                        <h1 id="about">About me</h1>
                    </div>
                    <div className='description'>
                        <p>Eu sou Lucas Agostinho, tenho 21 anos e nasci na cidade de Pinhais no Estado do Paraná. Atualmente estou no ramo industrial, estagiando e aprendendo um pouco sobre esse ambiente, entretanto estou em busca de uma nova especialização, na área de tecnologia, mas especificamente no curso de desenvolvimento web na Trybe, uma das melhores escolas de programação do Brasil. Sou uma pessoa que está em constante adaptação, sempre buscando novas caminhos para percorrer.</p>
                    </div>
                </div>
            </div>
        </ContainerAbout>
    );
};

export default AboutMe;