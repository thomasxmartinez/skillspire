import React from 'react';
import '../css/footer.css';





class FooterCom extends React.Component {
    render(){
        return(
            <div className="footer-main">
                    <table className="footer-table">
                        <tr className="footer-column">
                            <td className="footer-data"><img className="listImage" src={require('../images/linkedin-button.svg')} href="https://www.linkedin.com/in/thien-an-hoang/" mode='fit' />
                            </td>
                            <td className="footer-data"><img className="listImage" src={require("../images/github-logo.png")} href="https://github.com/Weakcode" mode='fit'/></td>
                        </tr>
                    </table>
                    <div className="footer-copyright">
                        &copy; {(new Date().getFullYear())} Copyright: <a > Thien-An Hoang </a>
                    </div>
            </div>
        );
    }
}
      
export default FooterCom;