(() => {
	const key = "yourAPIKey";
	const fileId = "yourFileID";
	fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${key}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
})();
