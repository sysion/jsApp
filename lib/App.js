class App{
	constructor(selector){
		this.selectorElement = document.querySelector(selector);
		this.items = {};
		this.currentItem = '';
	}

	addItem(item){
		this.items[item.name] = item;
		item.model = this.proxify(item.model);
	}

	showItem(name){
		this.currentItem = this.items[name];
		this.updateView();

		if (this.currentItem){
			this.currentItem.controller(this.currentItem.model);
		}
	}

	updateView(){
		if (this.currentItem){
			this.selectorElement.innerHTML = this.currentItem.view(this.currentItem.model);
		}
	}

	proxify(model) {
		return new Proxy(model, {
			set: (target, property, value) => {
				//console.log('Changing', property, 'from', target[property], 'to', value);
				target[property] = value;
				this.updateView();
				return true;
			}
		});
	}


}


export default App;