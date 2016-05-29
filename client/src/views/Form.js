import React from 'react';
import Modal from 'react-modal';
import update from 'react-addons-update';

// react-modal https://github.com/reactjs/react-modal
// React.addons.update https://www.npmjs.com/package/react-addons-update

const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    borderRadius : '0px',
    marginRight : '-50%',
    border : '2px solid #0a0a0a',
    transform : 'translate(-50%, -50%)'
  }
};

export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title : '',
			description : '',
			open : false
		};
	}

	afterModalOpen = () => {
		if (this.titleInput !== null) {
			this.titleInput.focus();
		}
	};

	handleTitleChange = (e) => {
		this.setState({ title : e.target.value.trim() });
	};

	handleDescChange = (e) => {
		this.setState({ description : e.target.value.trim() });
	};

	submitForm = (e) => {
		e.preventDefault();
		this.props.addItem(this.state);
		this.props.closeModal();
	};

  render() {
    return(
    	<Modal
    		isOpen={this.props.modalOpen}
    		onAfterOpen={this.afterModalOpen}
    		onRequestClose={this.props.closeModal}
    		style={customStyles}>

    		<form onSubmit={this.submitForm}>
    			<fieldset>
    				<legend>Title</legend>
    				<input type="text" className="form-control" onChange={this.handleTitleChange} 
                           ref={(ref) => this.titleInput = ref} required />
    			</fieldset>
    			<fieldset>
    				<legend>Description</legend>
    				<textarea className="form-control" onChange={this.handleDescChange} />
    			</fieldset>
    			<button type="submit" className="button">Add</button>
    		</form>
            
    	</Modal>
    );
  }

}