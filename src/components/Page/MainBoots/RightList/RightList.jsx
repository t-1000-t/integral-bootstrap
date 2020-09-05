import React, {Component} from 'react';
import closeRightList from "../../../middleware/RightList/closeRightList";

class RightList extends Component {
    render() {
        const {idRL} = this.props;
        return (
            <>
             <ul id={idRL} className="dropdown-menu">
                 <a className="dropdown-item" href="/#">Dropdown link 1</a>
                 <a className="dropdown-item" href="/#">Dropdown link 2</a>
                 <a className="dropdown-item" href="/#">Dropdown link 3</a>
                 <a className="dropdown-item" href="/#">Dropdown link 4</a>
                 <button onClick={() => closeRightList(idRL)} className="dropdown-item text-muted" href="/#">Закрыть <svg width="1em"
                                                                                                                   height="1em"
                                                                                                                   viewBox="0 0 16 16"
                                                                                                                   className="bi bi-caret-up-fill text-success"
                                                                                                                   fill="currentColor"
                                                                                                                   xmlns="http://www.w3.org/2000/svg">
                     <path
                         d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                 </svg></button>
             </ul>
            </>
        );
    }
}

export default RightList;