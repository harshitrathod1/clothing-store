import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx'
import { useNavigate } from 'react-router-dom';

const CollectionPreview = ({ title,items }) => {
    let navigate = useNavigate();

    const titleInLowerCase = title.toLowerCase();
    const titleInUpperCase = title.toUpperCase();
    
    return(
    <div className="collection-preview">
        <h1 className="title" onClick={ () => navigate(`${titleInLowerCase}`)}> 
            {titleInUpperCase}
        </h1>       
        <div className="preview">
            { 
                items
                .filter((item,idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>  
    </div>
    );
    
}

export default CollectionPreview;