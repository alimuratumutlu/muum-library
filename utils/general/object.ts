export const deepClone = <T>(obj: T): T => {
	return JSON.parse(JSON.stringify(obj));
};

export const isEmptyObject = (obj: Record<string, any>): boolean => {
	return Object.keys(obj).length === 0;
};
