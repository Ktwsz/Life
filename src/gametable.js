import React from 'react';

function create_arr(columns, rows) {
    let colors = new Array(columns);
    for (let i = 0; i < columns; i++) {
      colors[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        colors[i][j] = "white";
      }
    } 
    return colors;
}

class Rw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: props.rows,
      columns: props.columns,
      colors: create_arr(props.columns, props.rows)
    };

    this.changeofcolor = this.changeofcolor.bind(this);
  }

  rd(current_row) {
    let arr = new Array();
    for (let i = 0; i < this.state.columns; i++) {
      arr.push(<th><div id="game" style={{backgroundColor: this.state.colors[i][current_row]}} onClick={() => this.changeofcolor(i, current_row)}/></th>);
    }
    return arr;
  }

  cd() {
    let arr = new Array();
    for (let i = 0; i < this.state.rows; i++) {
      arr.push(<tr>{this.rd(i)}</tr>);
    }
    return arr;
  }

  changeofcolor(a, b) {
    let colors = this.state.colors;
    colors[a][b] = (colors[a][b] === 'white')? 'black' : 'white';
    this.setState({
      colors: colors
    });
  }

  render() {
    return (
      <table>
        <tbody>
        {this.cd()}
        </tbody>
      </table>
    );
  }

}

export {Rw, create_arr};