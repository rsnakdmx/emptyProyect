import React from 'react';
import './styles.css';

const Footer = () =>
{
    return(
        <footer className="bg-dark page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="text-center py-3">
                        <h4 className="text-uppercase">¡Contactanos!</h4>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">E-mail</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:xxx">xxx</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Teléfonos</h5>
                        <ul className="list-unstyled">
                            <li><a href="tel:5523602813">xx</a></li>
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Redes sociales</h5>
                        <ul className="list-unstyled">
                            <li>
                                Social
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;