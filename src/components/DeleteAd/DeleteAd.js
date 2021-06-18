import './DeleteAd.scss'
import {Component} from 'react'
import Header from "../Header/Header";
import Newslater from '../Newslater/Newslater'
import Footer from '../Footer/Footer'
import axios from 'axios'
import Crud from '../Crudlink/Crud';
class DeleteAd extends Component  {



    state = {
        annonces: [],
        selectedId:''
    }
  
  componentDidMount(){
        axios.get('https://localhost/project/index.php/getAllAnnoce').then(res => 
        {
            this.setState({annonces: res.data});
        });   
    }


    render() {    
        const deleteAd = (e) => {
            e.preventDefault();
            axios.post(`https://localhost/project/index.php/deleteAnnonce/${this.state.selectedId}`).then(function (response) {
                console.log(response.data);            
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }

        const handleChange = (e) => {
            const id = e.target.value
            this.setState({selectedId:id})
            
        } 
        return (
            <div>
                <Header />
                <div className="container container-delete">
                    <div className="row">
                        <h1>Delete Annonce</h1> 
                        <Crud />
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={deleteAd}>
                                <select onChange={handleChange} className="form-control" name="annonce">
                                    <option hidden>Select annonce</option>
                                    {this.state.annonces.map((annonce) => (
                                        <option key={annonce.id} value={annonce.id}>{annonce.name}</option> 
                                    ))}
                                </select>
                                <button className="btn btn-delete btn-primary">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            
                <Newslater />
                <Footer />
            </div>
        )
    }
}

export default DeleteAd;