import './Addads.scss'
import {useState} from 'react'
import Header from '../Header/Header'
import Newslater from '../Newslater/Newslater'
import Footer from '../Footer/Footer'
import Crud from '../Crudlink/Crud'

const Addads = () => {

    // state = {
    //     annonceName : '',
    //     annoncePrix : '',
    //     annonceDescription : '',
    //     annonceImage : '',
    // }

    // render() {

    const [annonceName,setAnnonceName] = useState('') 
    const [annonceDescription,setAnnonceDescription] = useState('') 
    const [annoncePrix,setAnnoncePrix] = useState('') 
    const [annonceImage,setAnnonceImage] = useState('') 

    const axios = require('axios')

    const addannonce = (e) => {
        e.preventDefault();
        console.log(annonceName)
        console.log(annonceDescription)
        console.log(annoncePrix)
        console.log(annonceImage)
        axios.post('https://localhost/project/index.php/annonces_create', {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            name: annonceName,
            description: annonceDescription,
            prix : annoncePrix,
            image : annonceImage
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="add-form">
                        <h1>Add Annonce</h1>
                        <Crud />
                        <div className="row">
                            <div className="col-md-6 offset-md-2">
                                <form onSubmit={addannonce}> 
                                    <label htmlFor="annonce-name">Name</label>
                                    <input placeholder="Votre annonce" onChange={event => setAnnonceName(event.target.value) } type="text" name="annonceName" id="annonce-name" className="form-control" />
                                    <label htmlFor="annonce-prix">Prix</label>
                                    <input id="annonce-prix" onChange={event => setAnnoncePrix(event.target.value) } type="text" className="form-control" name="annoncePrix" />
                                    <label htmlFor="annonce-description">Description</label>
                                    <textarea onChange={event => setAnnonceDescription(event.target.value) } placeholder="annonce-description" id="annonce-description" name="annonceDescription" className="form-control"></textarea>
                                    <label htmlFor="annonce-image">Image</label>
                                    <input onChange={event => setAnnonceImage(event.target.value) } type="file" name="annonceImage" id="annonce-image" className="form-control" />
                                    <button type="submit" className="btn btn-primary">Add Annonce</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Newslater />
                <Footer />
            </div>
        )
    // }

}

export default Addads;