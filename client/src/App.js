import './App.css';
import React from 'react';
import { getRecipes } from './actions';
import { useState , useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import  Home  from './components/Home'
import RecipeCreate from './components/RecipeCreate'
import Detail from './components/Detail';


function App() {

const dispatch=useDispatch()

  useEffect(()=> {
    dispatch(getRecipes())
},[dispatch])//

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element= {<LandingPage/>}/>
        <Route exact path='/home' element= {<Home/>}/>   
        <Route exact path='/create' element={<RecipeCreate/>}/>
        <Route exact path='/recipe/:id' element={<Detail/>} />         
    </Routes>
    </BrowserRouter>
  );
}

export default App;
