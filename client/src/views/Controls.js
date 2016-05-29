import React from 'react';

export default class Controls extends React.Component {

  render() {
    return(
      <section className="controls-container">
        <button className="button" onClick={this.props.openAll}>Open All</button>
        <button className="button" onClick={this.props.closeAll}>Close All</button>
        <button className="button" onClick={this.props.toggleAll}>Toggle All</button>
        <button className="button float-right" onClick={this.props.openModal}>Add</button>
      </section>
    );
  }

}