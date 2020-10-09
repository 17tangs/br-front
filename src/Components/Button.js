import React from 'react';
import './About.css';

// export default class Button extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }

//     selectBtn(){
//       document.getElementById('writer').backgroundColor="#b3e7fa";
//       document.getElementById('artist').backgroundColor="#b3e7fa";
//       document.getElementById('developer').backgroundColor="#66cef5";
//       document.getElementById('sponsor').backgroundColor="#b3e7fa";
//       document.getElementById('other').backgroundColor="#b3e7fa";
//       this.backgroundColor="#66cef5";
//     }
//     render(props){
//         return(
//             <button className="button" onClick={(e) => this.selectBtn(e)} id={this.props.label}>{this.props.label}</button>
//         )
//     }
// }

function Button() {
    const selectBtn = () => {
        document.getElementById('writer').backgroundColor="#b3e7fa";
        document.getElementById('artist').backgroundColor="#b3e7fa";
        document.getElementById('developer').backgroundColor="#66cef5";
        document.getElementById('sponsor').backgroundColor="#b3e7fa";
        document.getElementById('other').backgroundColor="#b3e7fa";
        this.backgroundColor="#66cef5";
    }
    return (
        <button className="button" onClick={(e) => selectBtn(e)} id={this.props.label}>{this.props.label}</button>
    )
}

export default Button;
