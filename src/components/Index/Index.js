import { Component, Fragment } from "react";

import Header from '../Header/Header'
import Ads from '../Ads/Ads'
import Newslater from '../Newslater/Newslater'
import Footer from '../Footer/Footer';

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Ads />
                <Newslater /> 
                <Footer />
            </Fragment>
        )
    }
}

export default Index;