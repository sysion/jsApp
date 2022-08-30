//not using a class because there are no internal states hence just exporting an object containing some functions.
export default{
	async getHouses(){
		const response = await fetch('https://houserestapi.herokuapp.com/index.php');
		return response.json();
	},
	async getHouse(id){
		const response = await fetch(`https://houserestapi.herokuapp.com/index.php?id=${id}`);
		return response.json();
	}

};