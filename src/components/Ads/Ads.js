import { Component } from 'react';
import './Ads.scss'
import img from './images/img_3.jpg.webp';
import axios from 'axios';
import { BrowserRouter,Link} from 'react-router-dom';
class Ads extends Component {

  
    state = {
        annonces: []
    }
  


  componentDidMount(){
        axios.get('https://localhost/project/index.php/getAllAnnoce').then(res => 
        {
            this.setState({annonces: res.data});
        });   
    }

     render() {
        return (
            <div>
                <div className="container annonce-content">
                    <div className="row">
                        <h4>Featured Ads</h4>
                        {/* {annonces} */}
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
                                    <div className="button">
                                        <button className="btn btn-warning">
                                            <BrowserRouter>
                                                <Link to={`/getAnnonce/${annonce.id}`} >
                                                    view
                                                </Link>
                                                
                                            </BrowserRouter>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
     }

}

export default Ads;