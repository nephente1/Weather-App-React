import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';


class App extends React.Component{
    render(){
        return <div>
            <Weather />
            
            </div>
    }
}

ReactDOM.render( <App />, document.getElementById('app'));