//not using a class because there are no internal states hence just exporting an object containing some functions.
export default{
	async getHouses(){
		const response = await fetch('http://127.0.0.1:12345/index.php');
		return response.json();
	},
	async getHouse(id){
		const response = await fetch(`http://127.0.0.1:12345/index.php?id=${id}`);
		return response.json();
	}

};