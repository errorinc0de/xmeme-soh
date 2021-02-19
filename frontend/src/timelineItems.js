import React, { Component } from 'react';
import Modal from './Modal.js';
import './timelineItems.css';
import axios from 'axios';

const backendUrl = "http://localhost:8081/memes";

class timelineItems extends Component {
    
    constructor(props) {
        super(props)

        const imgNotAvailableLink = "https://memegenerator.net/img/instances/30817716.jpg";
        if(props.items.url === ''){
            props.items.url = imgNotAvailableLink;
        }

        this.state = {
            meme: props.items,
            show: false,
            updatePatch: {
                            caption: props.items.caption,
                            url: props.items.url
                        }
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    changeHandler = (e) => {
        this.setState({updatePatch: {...this.state.updatePatch,[e.target.name]: e.target.value}});
        this.setState({meme: {...this.state.meme,[e.target.name]: e.target.value}});
    }

    submitHandler = async(e) => {
        e.preventDefault();
        const submitURL = backendUrl + `/${this.state.meme.id}`;
        await axios.patch(submitURL,this.state.updatePatch).then(res => {
            if(res.data.success === true)
                alert("Value Successfully updated");
            else
                alert("Failed!");
        });
        this.setState({updatePatch:{}});
        window.location.reload();
    }

    render() {
        return (
            <div className = "card" key={this.state.meme.id}>
                <h3>{this.state.meme.name}</h3>
                <h4>{this.state.meme.caption}</h4>
                <img src={this.state.meme.url} alt="Meme was supposed to be here :(" />
                <Modal show={this.state.show} handleClose={this.hideModal} className="modal">
                    <form onSubmit={this.submitHandler} className="updateForm">
                        <div className="caption" id="field">
                            <h3 id="descrip">Caption:</h3>
                            <input type="text" id="ip" name="caption" value={this.state.meme.caption} onChange={this.changeHandler} required/>
                        </div>
                        <div className="url" id="field">
                            <h3 id="descrip">Image URL:</h3>
                            <input type="text" id="ip" name="url" value={this.state.meme.url} onChange={this.changeHandler} required/>
                        </div>
                        <button type="submit" className="patch-submit">Update</button>
                    </form>
                </Modal>
                <button id="edit" onClick={this.showModal}>EDIT</button>
            </div>
        )
    }
}


export default timelineItems;
