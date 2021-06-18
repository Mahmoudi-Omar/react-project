import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="first-content">
                            <div className="logo">
                                {/* <img src="{{ asset('assets/images/logo.png') }}" />
                                <div className="slogan">
                                    <h4>Apex Medical</h4>
                                    <p>PARAMEDICAL STORE</p>
                                </div> */}
                                <span>DIRECTORYADS</span>
                            </div>
                            <p className="slogan-desc">Vous trouverez chez Apex-Medical un large choix des produits parapharmaceutique au meilleur prix et sélectionnés parmi les plus grands laboratoires parapharmaceutiques</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="information">
                            <h4>Information</h4>
                            <ul>
                                <li>Qui Sommes Nous</li>
                                <li>Informations de livraison</li>
                                <li>Politique de confidentialité</li>
                                <li>Conditions générales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="Contact-Us">
                            <h4>Contact</h4>
                            <span className="title-contact">Email: <span>Apex.medical@hotmail.com</span></span>
                            <span className="title-contact">Appelez-nous: <span>22 429 019 -- 22 324 453 -- 71 632 346</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;