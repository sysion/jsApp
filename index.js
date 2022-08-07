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
		<img src=${house.url} alt=${house.code} />
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

//app.showItem('houses');
router.addRoute('houses', '^#/houses$');