import App from './lib/App.js';
import Router from './lib/Router.js';
import API from './lib/API.js';


const app = new App('#app');
const router = new Router(app);


const hsTemplate = (house) => `
  <!--section class='house-listing'>
    <a href='#houses/${house.id}'>
      <h3 class='name'>${house.name}</h3>
      <section> 
        <figure> 
          <img src='${house.url}' alt='${house.name}' />
        </figure>
        <p>${house.description}</p>
      </section>
    </a>
  </section-->

  <div class='house'> 
		<h1>${house.address}</h1>
		<h2>${house.agent} <span>: ${house.code}</span></h2>
		<a><img src=${house.url} alt=${house.code} /></a>
	</div>;
`;

app.addItem({
	name: 'houses',
	model: {
		houses: []
	},
	view(model){
		//return `<h2>There are ${model.houses.length} houses.</h2>`;

		return `
			<ul class='houses'>
				${model.houses.map(house => `<li>${hsTemplate(house)}</li>`).join('')} 
			</ul>
		`;
	},
	//controller reaches out to the API to get the data, then update the model and the view then changes based on the updated model
	async controller(model){	
		const houses = await API.getHouses();
		//console.log(houses);
		model.houses = houses;
		//app.updateView();
	}
});

app.addItem({
	name: 'house',
	model: {
		house: {}
	},
	view(model){
		return hsTemplate(model.house)
	},
	async controller(model){	
		const house = await API.getHouse(router.params[1]);
		model.house = house;
	}
});

//app.showItem('houses');
router.addRoute('houses', '^#/houses$');
router.addRoute('house', '^#/houses/([0-9]+)$');


// footer information
var ptarget = document.querySelector('footer p');
var date = new Date();
var year = date.getFullYear();
//console.log(year);
ptarget.innerHTML = '&copy;'+year+' Sysion Nigeria Ltd';