import './App.css';
import Index from './components/Index/Index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Addads from './components/AddAnonnce/Addads';
import DeleteAd from './components/DeleteAd/DeleteAd'
import {Component} from 'react'
import UpdateAd from './components/Updateannonce/Updatead'
import axios from 'axios'
import Getannonce from './components/GetAnnonce/GetAnnonce';

class App extends Component {
  

  
state = {
  annonces: []
}

componentDidMount(){
    //get request
    axios.get('https://localhost/project/index.php/getAllAnnoce').then(res => 
    {
        this.setState({annonces: res.data});
    }); 
    
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/annonce" component={Addads} />
            <Route path="/delete">
              <DeleteAd />
            </Route>
            {/* <Route path="/update">
              <UpdateAd />
            </Route> */}
            <Route path="/getAnnonce/:id" component={Getannonce} />
            <Route path="/update/:id" component={UpdateAd} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
