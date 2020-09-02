import React, {Component} from "react";
import MainCard from "./MainCard";
import shortId from "shortid";

class MainBoots extends Component {

    state = {
        arrMain: [],
        id: shortId.generate()
    };


    render() {
        const {arrMain, id} = this.state;
        return (
            <main role="main">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {arrMain.length > 0 && <MainCard key={id}></MainCard>}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainBoots;