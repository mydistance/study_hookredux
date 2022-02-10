import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Home from './view/Home';
import From from './view/From';
import HookDemo from './view/hook';
import Counter from './view/useRector';
import Todolist from './view/Todolist';
import Websockit from './view/Websockit';
import Viewredux from './view/ReduxContext';
import ClassView from './view/Class';









// import your route components too

export default function toRouter() {
return(
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="teams" element={<From />}> */}
          {/* <Route path=":teamId" element={<From />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        {/* </Route> */}
        {/* ---- */}
        {/* <Route path="teams/:teamId" element={<Team />} />
        <Route path="teams/new" element={<NewTeamForm />} /> */}
      </Route>
      <Route path="/home" element={<Home />}/>
      <Route path="/teams" element={<From />}/>
      <Route path="/hookdemo" element={<HookDemo />}/>
      <Route path="/counter" element={<Counter />}/>
      <Route path="/todolist" element={<Todolist />}/>
      <Route path="/sockit" element={<Websockit />}/>
      <Route path="/reduxcolor" element={<Viewredux />}/>
      <Route path="/class" element={<ClassView />}/>
      

      
      


      

      

      



      
      
    </Routes>

)}
