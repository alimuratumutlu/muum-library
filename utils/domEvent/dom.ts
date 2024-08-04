export const scrollToTop = (): void => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

export const toggleClass = (element: HTMLElement, className: string): void => {
	if (element.classList.contains(className)) {
		element.classList.remove(className);
	} else {
		element.classList.add(className);
	}
};
