// compoents
import QuestBoard from './pages/questBord.js'
import GoblinAttack from './pages/GoblinAttack.js'
import Questsucess from './pages/QuestSucess.js'
import QuestGreatsucess from './pages/QuestGreatSucess.js'
import QuestFailure from './pages/QuestFailure.js'
import QuestProgress from './pages/QuestInProgress.js'
// routing
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// minimum css
import './App.css'
import React, {Fragment} from 'react';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestBoard />} />
        <Route exact path="/goblin_attack" element={<GoblinAttack />} />
        <Route exact path="/quest_sucess" element={<Questsucess />} />
        <Route exact path="/quest_greatesucess" element={<QuestGreatsucess />} />
        <Route exact path="/quest_failure" element={<QuestFailure />} />
        <Route exact path="/quest_inprogress" element={<QuestProgress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
