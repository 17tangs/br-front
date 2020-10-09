import React from 'react';
import './Button.css';
import Button from './Button';

export default function ButtonList(){
    return(
        <div className="button-list flex">
          <Button label="writer"/>
          <Button label="artist"/>
          <Button label="developer"/>
          <Button label="sponsor"/>
          <Button label="other"/>
        </div>
    )
}
