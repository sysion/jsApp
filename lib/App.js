class App{
	constructor(selector){
		this.selectorElement = document.querySelector(selector);
		this.items = {};
		this.currentItem = '';
	}

	addItem(item){
		this.items[item.name] = item;
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


}


export default App;