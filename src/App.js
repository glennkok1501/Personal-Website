import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Topbar from './Components/Navigation/Topbar';
import Index from './Pages/Index';

function App() {
  return (
      <BrowserRouter>
        <div className='app'>
          <Topbar />
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
            </Switch>
        </div>

        
        
      </BrowserRouter>
    
  );
}

export default App;
