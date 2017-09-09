import React, {
  Component
} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      characters: []
    }
  }

  componentWillMount() {
    console.log(this.state.input);
  }

  onSearchInput = (e) => {
    this.setState({input: e.currentTarget.value})
    console.log(this.state.input);
  }

  onSearchSubmit = (e) => {
    e.preventDefault()
    let api = 'https://api.themoviedb.org/3/search/movie?api_key=5ce82df7c36395fe855cf07374c0715b&query='+this.state.input
    fetch(api).then(function(response) {console.log(response)})
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <h1 className='center col md12'>Juxtapost</h1>
        <div className='searchForm col md12'>
          <form onSubmit={this.onSearchSubmit}>
            <input required type='text' onChange={this.onSearchInput} value={this.state.input}/>
            <button className='btn waves-effect waves-light right' type='submit' name='action'>Submit <i className='material-icons right' />
            </button>
          </form>
        </div>
        <div className="characterList col md12">

        </div>
        <div className="graph col md12">
          <img src='https://i.stack.imgur.com/f48Tj.png' className=''></img>
        </div>
      </div>
    );
  }
}
