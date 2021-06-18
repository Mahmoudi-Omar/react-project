import { Fragment } from "react";
import './crud.scss'
const Crud = () => {
    return (
        <Fragment>
            <div className="crud-nav">
                <a className="btn btn-info" href="annonce">add annonce</a>
                {/* <a className="btn btn-warning" href="update">update annonce</a> */}
                <a className="btn btn-danger" href="delete">Delete annonce</a>
            </div>
        </Fragment>
    )
}

export default Crud;