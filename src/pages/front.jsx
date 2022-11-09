import {frontProjects} from './projFront'
import Header from '../components/header/Index';
import NavBar from '../components/header/NavBar';


const Front = () => {
  return (
  <div>
    <Header />
    <NavBar />
    {frontProjects.map((e) => {
        return (
            <div key={e.title}>
              <h1>{e.title}</h1>
              <p>{e.desc}</p>
              <button><a href={e.url}>See more...</a></button>
              <button><a href={e.gitHub}>Git Hub</a></button>
            </div>
        )
    })}
  </div>
  );
};
export default Front;