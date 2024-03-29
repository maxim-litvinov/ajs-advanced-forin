function orderByProps(obj, order) {
	const orderedProps = [];
	const unorderedProps = [];

	order.forEach(key => {
			if (obj.hasOwnProperty(key)) {
					orderedProps.push({ key, value: obj[key] });
			}
	});


	for (let key in obj) {
			if (!order.includes(key)) {
					unorderedProps.push({ key, value: obj[key] });
			}
	}

	unorderedProps.sort((a, b) => a.key.localeCompare(b.key));

	return orderedProps.concat(unorderedProps);
}

module.exports = orderByProps; 