import React, {Component} from 'react';
import picture from './picture.jpg';

class App extends Component {
  state = {
    person: {fullName: 'Rahma Ismail',
    bio: 'I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I build websites that delight and inform. I do it well. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.' , 
    imgSrc:<img src={picture} alt='profil' width='10%'></img>,
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
          <li>{this.state.person.imgSrc}</li>
          <li>{this.state.person.profession}</li>
          </ul> ) : 
          ( <h2> Click on the button to show profil </h2> )
        }
      </div>
    )

  }

}

export default App;
