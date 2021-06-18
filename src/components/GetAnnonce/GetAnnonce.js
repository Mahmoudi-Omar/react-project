import axios from "axios";
import { Component } from "react";
import Header from "../Header/Header";
import img from '../Ads/images/img_3.jpg.webp';
import "./getAnnonce.scss"
import { BrowserRouter, Link } from "react-router-dom";

class Getannonce extends Component {
    
    state = {
        annonces : []
    }

    componentDidMount() {
        // this.setState({id:this.props.match.params.id})
        // console.log(this.props.match.params.id)
        axios.get(`https://localhost/project/index.php/getAnnoce/${this.props.match.params.id}`).then(res=>{
            this.setState({annonces:res.data})
        })
    }

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state.annonce)
        return(
            <div>
                <Header />
                <div className="annonce-content">
                    {this.state.annonces.map((annonce)=>(
                        <div className="col-md-3" key={annonce.id}>
                            <div className="annonce-card">
                                <div className="anoonce-image">
                                    <img src={ img } alt="" className="img-fluid" />
                                </div>
                                <div className="title">
                                    <h4>{annonce.name}</h4>
                                </div>
                                <div className="description">
                                    <p>{annonce.description}</p>
                                </div>
                                <div className="prix">
                                    <p>{annonce.prix} DT </p>
                                </div>
                                <div className="edit">
                                    <BrowserRouter>
                                        <Link to="/update/:id" to={`/update/${annonce.id}`}>
                                            edit
                                        </Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Getannonce;