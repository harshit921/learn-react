import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	
	// constructor() {
	// 	super();
	// 	this.gotToStore = this.gotToStore.bind(this);
	// }

	gotToStore(event)
	{
		event.preventDefault();
		console.log(this.storeInput.value);
		
	}

	render(){
		return(
			<form className="store-selector" onSubmit={this.gotToStore.bind(this)}>
			<h2>Please Enter a Store</h2>
			<input type="text" required placeholder="Store Name"  defaultValue={getFunName()}
			  ref={(input) => {this.storeInput = input} } />
			<button type="submit">Visit Store -> </button>
			</form>

		)
	}
}

export default StorePicker;
