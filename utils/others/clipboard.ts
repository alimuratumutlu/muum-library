export const copyToClipboard = (text: string): void => {
	navigator.clipboard.writeText(text).then(
		() => console.log("Copying to clipboard was successful!"),
		(err) => console.error("Could not copy text: ", err)
	);
};
