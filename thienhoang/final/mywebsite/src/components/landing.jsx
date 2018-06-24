import React from 'react';
import '../css/landing.css';





class Landing extends React.PureComponent {


    render(){
        return(
            <div id="landing-main">
                <video  autoPlay loop>
                <source src={this.props.vidSrc} type="video/mp4" />
                <source src={this.props.vidSrc} type="video/webm" />
                <source src={this.props.vidSrc} type="video/ogv" />
                </video>
                
                <div>
                </div>     
            </div>
        );
    }
}
      
export default Landing;