import React, {Component} from 'react';
import './Button.css';
import Button from './Button';

export default class ButtonList extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(props){
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
}
