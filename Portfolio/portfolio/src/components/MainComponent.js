import MyNavbar  from "./my-navbar/my-navbar.component";
import Home from "./HomeComponent"
import Skills from "./SkillsComponent";
import Projects from "./ProjectsComponents";
import Footer from "./footerComponent"
import { Switch,Route,Redirect} from 'react-router-dom'

const Main = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Switch>
            <Route path="/home" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Redirect to="/home" />
        </Switch>
      <Footer />
    </div>
    
  );
}

export default Main;
