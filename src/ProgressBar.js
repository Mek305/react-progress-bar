import React from 'react';

class ProgressBar extends React.Component{
    render(){
        return(
            <div className = "bar">
                <div className = {this.props.class}
                  style = {this.props.width}>

                </div>
            </div>
        )
    }
}


export default ProgressBar;