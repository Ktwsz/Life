import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Rw, create_arr} from './gametable';
import turn from './gamerules';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      row: '0',
      column: '0',
      slider: '1000',
      checkbox: false,
      stop_button: false
    };

    this.row_handleChange = this.row_handleChange.bind(this);
    this.column_handleChange = this.column_handleChange.bind(this);
    this.slider_handleChange = this.slider_handleChange.bind(this);
    this.checkbox_handleChange = this.checkbox_handleChange.bind(this);
    this.gameturn = this.gameturn.bind(this);
    this.gamestop = this.gamestop.bind(this);
    this.gameon = this.gameon.bind(this);
  }

  column_handleChange(event) {
    this.setState({
      column: event.target.value
    });
    this.ref.current.setState({
      columns: event.target.value,
      colors: create_arr(event.target.value, this.ref.current.state.rows)
    });
  }

  row_handleChange(event) {
    this.setState({
      row: event.target.value
    });
    this.ref.current.setState({
      rows: event.target.value,
      colors: create_arr(this.ref.current.state.columns, event.target.value)
    });
  }

  slider_handleChange(event) {
    this.setState({
      slider: event.target.value
    });
  }

  checkbox_handleChange(event) {
    this.setState({
      checkbox: event.target.checked
    });
  }

  gameturn() {
    this.ref.current.setState({
      colors: turn(this.ref.current.state.colors)
    });
  }

  gameon() {
    if (this.state.checkbox === false) {
      this.gameturn();
    } else {
      this.setState({
        stop_button: true
      });
      this.gameloop = setInterval(this.gameturn, this.state.slider);
    }
  }

  gamestop() {
    clearInterval(this.gameloop);
    this.setState({
      stop_button: false
    });
  }

  render() {
    return (
      <div id="game">
      <label>Rows:</label><input type = "number" min = "0" value = {this.state.row} onChange={this.row_handleChange} /><label>Columns:</label><input type = "number" min = "0" value = {this.state.colum} onChange={this.column_handleChange} />
      <Rw rows={this.state.value} columns={this.state.value} ref={this.ref} />
      <label>Auto turn</label><input type="checkbox" onClick={this.checkbox_handleChange}/>
      {this.state.checkbox && <div><label>Speed of turn: {this.state.slider/1000} sec</label><input id="slider" type="range" min="0" max="2000" value={this.state.slider} onChange={this.slider_handleChange}/></div>}
      <button onClick={this.gameon}> Turn! </button>
      { this.state.stop_button && <button onClick={this.gamestop}>Stop turn</button>}
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
