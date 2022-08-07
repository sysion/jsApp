class Router{
	constructor(app){
		this.app = app;
		this.routes = [];
		this.hashChange = this.hashChange.bind(this);	//bind this.hashChange to this class so it's is access with this class's context
		window.addEventListener('hashchange', this.hashChange);

		//throws error because this.hashChange runs in the context of window i.e. window.hashChange
		window.addEventListener('DOMContentLoaded', this.hashChange);	
	}

	addRoute(name, path){
		this.routes.push({name, path});
	}

	hashChange(){
		//console.log(window.location.hash);

		const { hash } = window.location;
		const route = this.routes.find((route) => {
			return hash.match(new RegExp(route.path));
		});

		//console.log(route);

		if (route){
			this.app.showItem(route.name);
		}
	}


}


export default Router;