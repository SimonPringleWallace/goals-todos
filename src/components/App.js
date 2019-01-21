import React from 'react';
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {connect} from 'react-redux'
import {getInitialData} from '../actions/shared'

class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;

    dispatch(getInitialData())

  }
  render (){
    const { loading } = this.props

    if (loading === true) {
      return <h3> Loading </h3>
    }

    return(
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

// connect: Render any component passing that component any data it needs from the store.
// connect() returns a funciton that we then invoke with the component that we want to render
// in the case below 'App'

const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App)

export default ConnectedApp
