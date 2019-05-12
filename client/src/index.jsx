import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    Axios.get('/repos')
    .then((response) => {
      console.log('RESPONSE DATA', response.data);
      this.setState({repos: this.state.repos.concat(response.data)});
    }).catch(function(error) {
      console.log(error);
    });
  }
  search (term) {
    console.log(`${term} was searched`);
    // TODO
    Axios.post('/repos', 
    { username: term})
    .then(function(response) {
      console.log('response from post: ', response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));