import React from 'react';
import '../css/footer.css';





class FooterCom extends React.Component {
    render(){
        return(
            <div className="footer-main">
                    <table className="footer-table">
                        <tr className="footer-column">
                            <td className="footer-data">
                                <button className="button">
                                    <img className="listImage" src={this.props.imgLinkedin} href="https://www.linkedin.com/in/thien-an-hoang/" mode='fit' alt="description " />
                                </button>
                            </td>
                            <td className="footer-data">
                                <button className="button">
                                    <img className="listImage" src={this.props.imgGithub} href="https://github.com/Weakcode" mode='fit' alt="description"/>
                                </button>
                            </td>
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