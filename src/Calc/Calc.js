import React from 'react';

import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate};
  }

  calcRate = (e) => {
    e.preventDefault();
    console.log('work');
    let elements = e.target.elements;
    console.log(elements);
    console.log(elements['count-currency'].value);
    console.log(elements['type-currency'].value);
    let typeCurrency = elements['type-currency'].value;
    let countCurrency = elements['count-currency'].value;
    this.setState({result: (countCurrency / this.state.rate[typeCurrency])})
  }

  render() {
    return (
      <div className="calculator">
        <h3>Калькулятор обмена</h3>
          <div className="block">
            <div>Введите сумму перевода:</div>
            
            <div>
              <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="0" name="count-currency"/>
                <select name="type-currency" id="">
                  {Object.keys(this.props.rate).map((keyName, i) =>
                    (
                      <option key={keyName} value={keyName}>{keyName}</option>
                    )
                  )}
                </select>
                <input type="submit" defaultValue="calc" />
              </form>
            </div>
            <div>
              <h4>Результат</h4>
              <ul className="calc-res">
                <li>KZT {this.state.result}</li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default Calc;
