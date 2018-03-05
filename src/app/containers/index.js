import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import About from '../components/About';
import LeftBar from '../components/LeftBar';

class App extends React.PureComponent {
  render () {
    return (
      <section>
        <About />
        <LeftBar />
      </section>
    );
  };
};
export default App;
//
// export default connect(
//   state => ({}),
//   dispatch => ({})
// )(App);
