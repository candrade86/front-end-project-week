import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesList from './NotesList';
import Header from './Header';
import { getNotes } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div >
        <Header />
        <NotesList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getting: state.getting,
    notes: state.notes,
    error: state.errorMessage,
  }
}

export default connect(mapStateToProps, { getNotes })(App);
