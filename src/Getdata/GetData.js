import { Component } from 'react';

import axios from 'axios';

class Getdata extends Component {


        state = {
            data: []
        }
    

    componentDidMount(){
        //get request
        axios.get('https://localhost/project/index.php/getAllAnnoce').then(res => 
        {
            this.setState({data: res.data});
        }); 
        
    }
    
    render() {
        return(
            <div className="maincontainer">
       
        <h1 className="mr-5 ml-5 mt-5">Therichpost.com</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.name}</td>
                  <td>{result.description}</td>
                  <td>{result.prix}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
       
            
      </div>
     
      </div>
        )
    }
}

export default Getdata;