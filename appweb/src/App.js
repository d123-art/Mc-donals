import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Categorias from './products/components/Categorias';
import Productos from './products/components/Productos';
import Roles from './products/components/Roles';
import Inicio from './products/components/Inicio';
import Usuarios from './products/components/Usuarios'

function App(){
  return(
    
    <Router>

      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/Inicio">Home</a>
      </li>
      <li class="nav-item">
          <a class="nav-link active" href="/Usuarios">Usuarios</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/Roles">Roles</a>
        </li>


        <li class="nav-item">
          <a class="nav-link active" href="/Productos">Productos</a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link active" href="/Categorias">Categorias</a>
        </li>

      </ul>
      </div>
            

          </div>
        </nav>
      </div>
      
    <div className="container">
     
      <hr />
      <Switch>




  
      
      <Route path="/Inicio"exact>

        <Inicio />

        </Route>



        <Route path="/Usuarios">

        <Usuarios />

        </Route>




        <Route path="/Roles">

        <Roles />

        </Route>





        <Route path="/Productos">

        <Productos />

        </Route>




        <Route path="/Categorias">

        <Categorias />

        </Route>



        
      </Switch>
      </div>
      
</Router>
    
  );
}

export default App;