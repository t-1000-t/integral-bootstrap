import React, {Component} from 'react';

class MainCard extends Component {
    render() {
        const {id, large_image, product_code, cardName, brief_description} = this.props;
        return (
            <div key={id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <p className="card-text">&nbsp; &nbsp; Код: {product_code}</p>
                    <img class="card-img-top" src={large_image} alt={product_code}/>
                    <div className="card-body">
                        <h5 className="card-title">{cardName}</h5>
                        <p className="card-text">{brief_description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCard;