import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.state = {
      uid: null ,
      uid: null
    }
	}

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderLogin() {
   return ( 
    <nav className="login">
       <h2>Inventory</h2>
       <p>Sign in to manage your store's inventory</p>
       <button className="github" onClick={() => this.authenticate('github')}>Login With Github</button>
      <button className="facebook" onClick={() => this.authenticate('facebook')}>Login With facebook</button>
      <button className="twitter" onClick={() => this.authenticate('twitter')}>Login With twitter</button>
 

       </nav>)
  }

  renderInventory(key){
  	const fish = this.props.fishes[key];
  	return(
  		<div className="fish-edit" key={key}>
  			<input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
  			<input type="text" name="price" value={fish.price} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
  			<select name="status" type="text"  value={fish.status}placeholder="fish Status" onChange={(e) => this.handleChange(e, key)}>
  				<option value="available">Fresh!</option>
  				<option value="unavailable">Sold Out</option>
  			</select>
			<textarea name="desc" type="text" value={fish.desc} placeholder="Fish Description" onChange={(e) => this.handleChange(e, key)} ></textarea>
  			<input type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)} />
  			<button onClick={() => this.props.removeFish(key)}>Remove Fish!</button>
		 </div>
  		)
  }

  render() {
    const logout = <button>LogOut!</button>
    if(!this.state.uid){
      return <div>{this.renderLogin()}</div>
    }

    if(this.state.uid !== this.state.owner) {
      return(
        <div>
          <p>Sorry youu are not store owner!.</p>
        </div>
      )
    }

    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples} > Load Sample Fishes </button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish:React.PropTypes.func.isRequired,
  removeFish:React.PropTypes.func.isRequired,
  addFish:React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;
