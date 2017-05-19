import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import { typeDefs } from './schema'

import ChannelsListWithData from './components/ChannelsListWithData'
import logo from './logo.svg';
import './App.css';

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ schema })

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' })

const client = new ApolloClient({
  networkInterface
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to GraphQL Messenger</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
