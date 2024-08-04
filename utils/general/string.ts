export const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCaseToTitle = (str: string): string => {
	return str
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (match) => match.toUpperCase());
};
