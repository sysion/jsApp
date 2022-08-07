//not using a class because there are no internal states hence just exporting an object containing some functions.
export default{
	async getHouses(){
		const response = await fetch('http://127.0.0.1:12345/api/houses/houses.json');
		//const response = await fetch('https://reststop.randomhouse.com/resources/authors?lastName=john');
		return response.json();
	}

};