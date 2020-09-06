import React, {Component} from 'react';
import closeDropdown from "../../../middleware/closeDropdown";
import CardProduct from "./CardProduct";
import fetchProducts from "../../../services/Boots/fetchProducrs/fetchProducts";

class ViewCategoryProducts extends Component {

    state = {
        isLoading: false,
        arrProducts: [],
        currentPage: 0,
        count: 0,
        isLoadingMoreProducts: false,
    };

    componentDidMount() {
        closeDropdown();
        this.fetchArrProducts()
    }

    categoryNumber = this.props.match.params.categorynum;


    // --- keep all products --- //
    fetchArrProducts() {
        const {currentPage} = this.state;
        this.setState({isLoading: true});
        try {
            fetchProducts(this.categoryNumber, currentPage)
                .then((data) => {
                    this.setState((state) => ({
                        count: data.count,
                        arrProducts: [...state.arrProducts, ...data.newArr],
                    }));
                })
                .catch((error) => {
                    this.setState({
                        error,
                    });
                })
                .finally(() => {
                    this.setState({isLoading: false, isLoadingMoreProducts: false});
                });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const {isLoading, arrProducts} = this.state;
        return (
            <>
                {isLoading &&
                <div className="text-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 mt-3">
                        {arrProducts.length > 0 && arrProducts.map(elem => (
                            <div className="col mb-4">
                                <CardProduct elem={elem} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ViewCategoryProducts;