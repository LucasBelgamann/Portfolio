import { ContainerProject } from "./stylesProjects";
import { projectsCards } from "./projects";
import Image from 'next/image'

function Projects() {
  return (
    <ContainerProject>
      <div>
        <div className="container-project">
          <div>
            <h1 id="projects">Projects</h1>
          </div>
          <div className="cards">
            {projectsCards.map((e) => {
              return (
                <div className={e.cName} key={e.title}>
                  <h2>{e.title}</h2>
                  <picture>
                    <img src={e.url} alt={e.alt} /> 
                  </picture>
                  <button>See more...</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ContainerProject>
  );
}

export default Projects;
