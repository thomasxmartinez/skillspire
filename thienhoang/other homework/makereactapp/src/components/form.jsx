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
        this.props.submitButton();
        console.log(this.state)
    }


    render(){
        return (
            <form id='form'>
                <input
    
                placeholder='first name' 
                value={this.state.firstName} 
                onChange={e => this.setState({ firstName : e.target.value })} />
                <br /> 

{/*              <br />  
                other method to not replicate work */}
                <input
                name='lastName'
                placeholder='last name' 
                value={this.state.lastName} 
                onChange={e => this.change(e)} />
                <br /> 

                <input
                name='userName'
                placeholder='user name' 
                value={this.state.userName} 
                onChange={e => this.change(e)} />
                <br /> 

                <input
                name='email'
                placeholder='email' 
                value={this.state.email} 
                onChange={e => this.change(e)} />
                <br /> 

                <input
                name='password'
                placeholder='password' 
                value={this.state.password} 
                onChange={e => this.change(e)} />
                <br /> 


                <button onClick={e => this.onSubmit(e)}>Submit</button>

            </form>
        );
    }
}
      
export default Form;