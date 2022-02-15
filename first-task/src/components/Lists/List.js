import React from 'react';
import './List.css';

const List = (props) => {
    
    const {img, title, description}=props;
    return (
    <div className="box">
      <div className="cards">
          <img src={img} className="image" alt="image"/>
          <div className="description-content">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
          </div>
        </div>
    </div>

    );
};
export default List;