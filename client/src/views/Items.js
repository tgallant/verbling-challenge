import React from 'react';
import Item from './Item';

export default class Items extends React.Component {

  itemFilter = () => {
    let items = this.props.items;
    let keywords = this.props.keywords.toLowerCase();
    
    if(items === [] || keywords === '') {
      return items;
    }

    let filteredItems = items.filter(item => {
      // lowercase everything so items still appear if the case is different
      let title = item.title.toLowerCase();
      let description = item.description.toLowerCase();
      return title.indexOf(keywords) > -1 || description.indexOf(keywords) > -1;
    });

    return filteredItems;
  };

  render() {
    let itemNodes = this.itemFilter().map((item, index) => {
      return(
        <Item item={item} key={index} index={index} toggleItem={this.props.toggleItem} />
      );
    });
    return(
      <section className="items-container">
        {itemNodes}
      </section>
    );
  }

}