import React, {Component} from "react";


class NavigationBoots extends Component {

    state = {
        isShow: false,
        isOpenDropdown: false
    };

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    };

    render() {
        const {isShow} = this.state;
        return (
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container d-flex">
                            <a href="/#" className="navbar-brand d-flex align-items-center">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 19 12" className="bi bi-laptop"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                                </svg>
                                <strong>Integral</strong>
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    {/*<li className="nav-item active">*/}
                                    {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <form className="form-inline mt-0 mt-md-0 mr-sm-2">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                       aria-label="Search"/>
                            </form>
                            <button onClick={this.toggleShow} type="button" className="btn-sm"
                                    data-toggle="collapse"
                                    data-target="#navbarHeader"
                                    aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon mr-sm-0"></span>
                            </button>
                        </div>
                    </nav>
                </div>

                {isShow && <div className="bg-dark collapse show" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any
                                    other
                                    background context. Make it a few sentences long so folks can pick up some
                                    informative
                                    tidbits. Then, link them off to some social networking sites or contact
                                    information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="/#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="/#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
            </header>
        )
            ;
    }
}

export default NavigationBoots;