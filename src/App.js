import UserOutput from './UserOutput';
import UserInput from './UserInput';
import './App.css';
import { Component } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


class App extends Component{
  state = {
    username:"Demo-Name",
  }

handleInput  = (event) => {
this.setState({
  username:event.target.value,
})

}

   render () {
    return (
      <div className="App">
 
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Type in your name to get a Warm greeting for today 
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <UserOutput username={this.state.username}/>
        </Typography>

        <Typography variant="body2">
        <UserInput click={this.handleInput}/>
        </Typography>
        </CardContent>

      </Card>
      </div>
    );
   }
}

export default App;
