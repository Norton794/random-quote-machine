import {Component} from 'react';
import './index.css';
import {quotes, pickAndChoose} from '../../constants/index';



class App extends Component {
  constructor() {
    super();
    this.state = {
      random: 0,
      quotes,
    }

    this.changeQuote = this.changeQuote.bind(this)
  }


  componentDidMount() {
    this.setState({
      random: pickAndChoose()
    })

  }

  changeQuote() {
    this.setState({
      random: pickAndChoose()
    })

  }



  render() {
    const { random, quotes } = this.state;
    return (
      <div id="quote-box">
        <h3 id="text">{quotes[random].text}</h3>
        <p id="author"> - {quotes[random].author}</p>
        <div id="group-buttons">
          <button id="new-quote" onClick={this.changeQuote}>New Quote</button>
        </div>
      </div>
    );
  }


}


export default App;