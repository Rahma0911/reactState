import React, {Component} from 'react';


class App extends Component {
  state = {
    person: {fullName: 'Rahma Ismail',
    bio: 'I’m a web developer. I build websites that delight and inform. I do it well.' , 
    profession: 'Web Developer'} ,
    isVisible: false
  }

  toggleVisibility = () => { this.setState({isVisible: !this.state.isVisible}) }

  render() {
    return(
      <div>
        <button onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide Profil' : 'Show Profil'}</button>
        {
          this.state.isVisible ? ( <ul> <li>{this.state.person.fullName}</li>
          <li>{this.state.person.bio}</li>
          <li>{this.state.person.profession}</li>
          </ul> ) : 
          ( <h2> Click on the button to show profil </h2> )
        }
      </div>
    )

  }

}

export default App;
