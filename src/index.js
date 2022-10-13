(() => {
	const key = "YourGoogleApiKey";
	const fileId = "1U2VkKfG0w8V9iMLCN-u_99Kc_xBbFFS9";
	fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${key}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
})();