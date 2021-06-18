import './Newslater.scss'

const Newslater = () => {
    return (
        <div className="newslater">
            <div className="col-md-6 col-xs-12">
                <h4>Inscrivez-vous aux newsletters</h4>
                <p>Inscrivez-vous et recevez notre Newsletter pour rester informé de toutes les promotions.</p>
            </div>
            <div className="col-md-6 col-xs-12">
                <div className="content-subs">
                    <input type="text" className="form-control" placeholder="Entrez votre adresse email ici..." />
                    <span>S'abonner !</span>
                </div>
            </div>
        </div>
    )
}

export default Newslater;