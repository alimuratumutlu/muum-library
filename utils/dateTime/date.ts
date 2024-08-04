export const formatDate = (
	date: Date,
	locale: string = "en-US",
	options: Intl.DateTimeFormatOptions = {}
): string => {
	return new Intl.DateTimeFormat(locale, options).format(date);
};

export const daysBetweenDates = (date1: Date, date2: Date): number => {
	const oneDay = 24 * 60 * 60 * 1000;
	return Math.round(Math.abs((date2.getTime() - date1.getTime()) / oneDay));
};
