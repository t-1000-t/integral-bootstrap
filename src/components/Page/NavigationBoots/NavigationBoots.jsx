import React, {Component} from "react";
import closeDropdown from "../../middleware/closeDropdown";
import showDropdown from "../../middleware/showDropdown";


class NavigationBoots extends Component {


    state = {
        isShow: false,
        isOpenDropdown: false
    };

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isOpenDropdown !== this.state.isOpenDropdown && this.state.isOpenDropdown === false) {
            this.toogleShowFalse();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    // Escape or click another place, close dropDown
    handleKeyPress = (e) => {
        console.log("e", e.code);
        if (e.code !== "Escape") {
            return;
        }

        this.toogleShowFalse();
        this.setState({
            isOpenDropdown: false
        });
    };

    // Open or Close category

    toogleShowFalse = () => {
        closeDropdown();
    };

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    };

    toggleDropdown = () => {
        this.setState({
            isOpenDropdown: !this.state.isOpenDropdown
        });
        this.state.isOpenDropdown ? closeDropdown() : showDropdown();
    };

    render() {
        const {isShow, isOpenDropdown} = this.state;
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
                                    <li id="closeDropdownShow"
                                        className="nav-item dropdown active">
                                        <a onClick={this.toggleDropdown} className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink"
                                           role="button" data-toggle="dropdown" aria-haspopup="false"
                                           aria-expanded={isOpenDropdown ? "true" : "false"}>
                                            Каталог товаров
                                        </a>
                                        <div id="menuDropdownShow" className="dropdown-menu"
                                             aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item font-weight-normal" href="/#">Ноутбуки</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Планшеты</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Компьютеры</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Комплектующие</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Смартфоны, связь, навигация</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Принтеры</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Сетевое оборудование</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Телевизоры, проекторы</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Гарнитура</a>
                                            <a className="dropdown-item font-weight-normal" href="/#">Бытовая техника</a>
                                            <button onClick={this.toggleDropdown} className="dropdown-item text-muted" href="/#">Закрыть <svg width="1em"
                                                                                                     height="1em"
                                                                                                     viewBox="0 0 16 16"
                                                                                                     className="bi bi-caret-up-fill text-success"
                                                                                                     fill="currentColor"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg></button>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline mt-0 mt-md-0 ml-sm-2">
                                <input className="form-control mr-sm-2" type="text" placeholder="Поиск..."
                                       aria-label="Поиск..."/>
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
                                <h4 className="text-white">О нас</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any
                                    other
                                    background context. Make it a few sentences long so folks can pick up some
                                    informative
                                    tidbits. Then, link them off to some social networking sites or contact
                                    information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Контакты</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="/#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="/#" className="text-white">Email</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
            </header>
        );
    }
}

export default NavigationBoots;