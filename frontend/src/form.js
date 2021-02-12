import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

const backendUrl = "https://xmeme-soh.herokuapp.com/memes";

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            memeState: {
            name: '',
            caption: '',
            url: '',
            insertedId: ''}
        }
    }

    

    changeHandler = (e) => {
        this.setState({memeState: {...this.state.memeState,[e.target.name]: e.target.value}});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post(backendUrl,this.state.memeState).then(res => {
            this.setState({memeState: {...this.state.memeState,insertedId: res.data.id}});
            this.setState({memeState:{}});
            window.location.reload();
        });
    }
    
    render() {
        const { name, caption, url } = this.state.memeState;

        return (
            <div className="form">
                <h1 id = "form_heading">X-MEME</h1>
                <form className = "form_data" onSubmit={this.submitHandler}>
                    <div className = "field">
                        <h3 className="description">Name:</h3>
                        <input id = "form_data_name" type = "text" name="name" placeholder = "Enter your Name" value ={name} onChange={this.changeHandler} required/>
                    </div>
                    <div className = "field">
                        <h3 className="description">Caption:</h3>
                        <input id = "form_data_caption" type = "text" name="caption" placeholder = "Enter Caption" value={caption} onChange={this.changeHandler} required/>
                    </div>
                    <div className = "field" >
                        <h3 className="description">URL:</h3>
                        <input id = "form_data_url" type = "url" name="url" placeholder = "Enter URL of meme" value={url} onChange={this.changeHandler} required/>
                    </div>
                    <button className = "submit" type="submit">Submit</button>
                    {this.state.memeState.insertedId && alert(`Inserted ID : ${this.state.memeState.insertedId}`)}
                </form>
            </div>
        )
    }
}

export default Form;