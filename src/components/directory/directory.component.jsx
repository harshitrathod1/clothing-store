import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss';

const Directory = ({ sections }) => {
    return(
        <div className = 'directory-menu'>
          {
            sections.map(({id, ...otherStateProps}) => {
              return <MenuItem key={id} {...otherStateProps}/>  
            })
          }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})
export default connect(mapStateToProps)(Directory);