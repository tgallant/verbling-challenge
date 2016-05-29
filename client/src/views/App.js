import React from 'react';
import Form from './Form';
import Items from './Items';
import Search from './Search';
import Controls from './Controls';
import update from 'react-addons-update';

// React.addons.update https://www.npmjs.com/package/react-addons-update

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			items : [],
			keywords : '',
			modalOpen : false
		};
	}

	openModal = () => {
		this.setState({ modalOpen : true });
	};

	closeModal = () => {
		this.setState({ modalOpen : false });
	};

	handleSearchChange = (e) => {
		// trim so there is no weirdness with initial or trailing spaces
		this.setState({ keywords : e.target.value.trim() });
	};

	addItem = (item) => {
		this.setState({ items : this.state.items.concat([item]) });
	};

	closeAll = () => {
		let closedItems = this.state.items.map(item => {
			item.open = false;
			return item;
		});
		this.setState({ items : closedItems });
	};

	openAll = () => {
		let openedItems = this.state.items.map(item => {
			item.open = true;
			return item;
		});
		this.setState({ items : openedItems });
	};

	toggleAll = () => {
		let toggledItems = this.state.items.map(item => {
			// reverse the boolean
			item.open = !item.open;
			return item;
		});
		this.setState({ items : toggledItems });
	};

	toggleItem = (index, item) => {
		let items = this.state.items;
		let updatedItem = update(items[index], { open : { $set : !item.open }});
		let newItems = update(items, {
			$splice : [[index, 1, updatedItem]]
		});
		this.setState({ items : newItems });
	};

	render() {
		return(
			<main className="row">
				<h1 className="text-center">Verbling Challenge</h1>
				<Search handleSearchChange={this.handleSearchChange} />
				<Items items={this.state.items} keywords={this.state.keywords} toggleItem={this.toggleItem} />
				<Controls openModal={this.openModal} openAll={this.openAll} closeAll={this.closeAll} toggleAll={this.toggleAll} />
				<Form modalOpen={this.state.modalOpen} closeModal={this.closeModal} addItem={this.addItem} />
			</main>
		);
	}

}