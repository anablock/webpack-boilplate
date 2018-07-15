import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FeatureDiscovery } from './react-materialize';

const App = () =>
  <div>
    <Button large floating fabClickOnly fab='horizontal' icon='edit' waves='light' className='red' id='menu'>
      <Button floating icon='insert_chart' className='red' />
      <Button floating icon='format_quote' className='yellow darken-1' />
      <Button floating icon='publish' className='green' />
      <Button floating icon='attach_file' className='blue' />
    </Button>

    <FeatureDiscovery open className='red white-text' target='menu'>
      <h5>Title</h5>
      <p>A bunch of text</p>
    </FeatureDiscovery>
  </div>;

ReactDOM.render(
  <App />, document.getElementById('root')
);
