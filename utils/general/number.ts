export const formatCurrency = (
	value: number,
	locale: string = "en-US",
	currency: string = "USD"
): string => {
	return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
		value
	);
};

export const randomInRange = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
