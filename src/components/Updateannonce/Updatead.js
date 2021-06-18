import { Component, Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Newslater from "../Newslater/Newslater";
import axios from 'axios'
import Crud from "../Crudlink/Crud";
class UpdateAd extends Component {

      
    state = {
        annonces: [],
        annonceName : '',
        annonceDescription : '',
        annoncePrix : ''
    }


    componentDidMount() {
        axios.get(`https://localhost/project/index.php/getAnnoce/${this.props.match.params.id}`).then(res=>{
            // console.log(res.data)
            this.setState({
                annonceName : res.data[0].name,
                annonceDescription : res.data[0].description,
                annoncePrix : res.data[0].prix
            })

        })

    }

    render() {
        const updateannonce = (e) => {
            e.preventDefault();
            axios.put(`https://localhost/project/index.php/updateAnnonce/${this.props.match.params.id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                },
                name: this.state.annonceName,
                description: this.state.annonceDescription,
                prix : this.state.annoncePrix,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        return(
            <Fragment>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <h1>Update annonce</h1>
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={updateannonce}> 
                            {/* onChange={event => setAnnonceName(event.target.value) } */}
                                <label htmlFor="annonce-name">Name</label>
                                <input placeholder="Votre annonce" onChange={e=>this.setState({annonceName:e.target.value})} value={this.state.annonceName}  type="text" name="annonceName" id="annonce-name" className="form-control" />
                                <label htmlFor="annonce-prix">Prix</label>
                                <input id="annonce-prix" onChange={e=>this.setState({annoncePrix:e.target.value})} value={this.state.annoncePrix}  type="text" className="form-control" name="annoncePrix" />
                                <label htmlFor="annonce-description">Description</label>
                                <textarea  onChange={e=>this.setState({annonceDescription:e.target.value})} value={this.state.annonceDescription}  placeholder="annonce-description" id="annonce-description" name="annonceDescription" className="form-control"></textarea>
                                {/* <label htmlFor="annonce-image">Image</label> */}
                                {/* <input onChange={e=>this.setState({annonceImage:e.target.value})} type="file" name="annonceImage" id="annonce-image" className="form-control" /> */}
                                <button type="submit" className="btn btn-primary">Update Annonce</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Newslater />
                <Footer />
            </Fragment>

        )
    }
}

export default UpdateAd;