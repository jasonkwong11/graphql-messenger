import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider
} from 'react-apollo'
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'
import { typeDefs } from './schema'

import ChannelsListWithData from './components/ChannelsList'
import logo from './logo.svg';
import './App.css';

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ schema })

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema })

const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
