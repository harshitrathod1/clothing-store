import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import fetchCollectionsStart from '../../redux/shop/shop.actions.js';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors.js';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview  from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);   

class ShopPage extends React.Component{
    
    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className="shop-page">
                <h1>Collections</h1>
                <Routes>
                    <Route exact path='/' element ={ <CollectionsOverviewWithSpinner isLoading = { isCollectionFetching }/>}/>
                    <Route exact path=':collectionId' element={ <CollectionPageWithSpinner isLoading= { !isCollectionLoaded }/> }/>
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = () => createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})  

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);