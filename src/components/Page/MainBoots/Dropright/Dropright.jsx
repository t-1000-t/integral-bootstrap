import React from "react";
import RightList from "../RightList/RightList";
import shortid from "shortid";
import showRightList from "../../../middleware/RightList/showRightList";

const Dropright = ({id, category}) => (
    <div key={shortid.generate()} className="btn-group dropright">
        <button onClick={() => showRightList(id)} type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
            {category}
        </button>
        <RightList idRL={id}/>
    </div>
);

export default Dropright;