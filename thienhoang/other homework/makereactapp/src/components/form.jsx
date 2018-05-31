import React from 'react';
import '../css/form.css';





class Form extends React.Component {
    state = {
        firstName: '',
        lastName:'',
        userName:'',
        email:'',
        password:'',
     }

     change = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.submitButton(this.state);
        this.setState({
        firstName: '',
        lastName:'',
        userName:'',
        email:'',
        password:''})
    }


    render(){
        return (
            <div id='outer'>
            <p id='ptag' >This returns results you inputed</p>
            <form id='form'>
                <input className='inputBox'
    
                placeholder='first name' 
                value={this.state.firstName} 
                onChange={e => this.setState({ firstName : e.target.value })
                this.setState({firstName: '',
                })}
                 />
                <br /> 

{/*              <br />  
                other method to not replicate work */}
                <input className='inputBox'
                name='lastName'
                placeholder='last name' 
                value={this.state.lastName} 
                onChange={e => this.change(e)} />
                <br /> 

                <input className='inputBox'
                name='userName'
                placeholder='user name' 
                value={this.state.userName} 
                onChange={e => this.change(e)} />
                <br /> 

                <input className='inputBox'
                name='email'
                placeholder='email' 
                value={this.state.email} 
                onChange={e => this.change(e)} />
                <br /> 

                <input className='inputBox'
                name='password'
                placeholder='password' 
                value={this.state.password} 
                onChange={e => this.change(e)} />
                <br /> 


                <button className='inputBox' onClick={e => this.onSubmit(e)}>Submit</button>
                <button  onClick={e => this.onSubmit(e)}>Advanced</button>

            </form>
            <div>
                <p></p>
            </div>
            </div>
        );
    }
}
      
export default Form;