import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnaphotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview  from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);   

class ShopPage extends React.Component{
    
    state = { 
        loading : true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnaphotToMap(snapshot); 
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <h1>Collections</h1>
                <Routes>
                    <Route exact path='/' element ={ <CollectionsOverviewWithSpinner isLoading = { loading }/>}/>
                    <Route exact path=':collectionId' element={ <CollectionPageWithSpinner isLoading= { loading }/> }/>
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);