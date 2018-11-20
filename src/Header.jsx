import React from 'react'
import Button from './Button';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    }


  }




  render() {
    return (
      <div>
        <Button lick={this.props.signOut} />
        <img alt="profile picture" className='imps' src={this.props.data.picture} />
        <h1>Welcome {this.props.data.displayName}</h1>
        
      </div>
    );
  }

}


export default Header