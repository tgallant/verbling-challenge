import React from 'react';
import classnames from 'classnames';

// classnames https://github.com/JedWatson/classnames

export default class Item extends React.Component {

	toggleItem = () => {
		this.props.toggleItem(this.props.index, this.props.item);
	};

  render() {
    let classes = classnames('item', { open : this.props.item.open });
    return(
      <div className={classes} onClick={this.toggleItem}>
        <p className="title">{this.props.item.title}</p>
        <p className="description">{this.props.item.description}</p>
        <span className="arrow"></span>
      </div>
    );
  }

}