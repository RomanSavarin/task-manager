export const isNumber = arg => typeof arg === 'number' && isFinite(arg);
export const isString = arg => typeof arg === 'string' || arg instanceof String;
export const camalize = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
