const serializeToObject = (elements) => {
    const obj = {};
    for (let i = 0; i < elements.length; i++) {
        const item = elements.item(i);

        if (!item.disabled && item.value) {
            obj[item.name] = item.value;
        }
    }
    return obj;
}

export { serializeToObject }