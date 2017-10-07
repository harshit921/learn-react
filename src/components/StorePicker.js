import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	
	// constructor() {
	// 	super();
	// 	this.gotToStore = this.gotToStore.bind(this);
	// }

	gotToStore(event)
	{
		const StoreId = this.storeInput.value;
		this.context.router.transitionTo(`/store/${StoreId}`);

		
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

StorePicker.contextTypes = {
	router: React.PropTypes.object
	 }


export default StorePicker;
