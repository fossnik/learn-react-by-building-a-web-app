/**
 * Fetch error helper
 *
 * the return type is an object
 * @param {object} response
 */

// handleResponse is defined as a function that takes response as a parameter
export const handleResponse = (response) => {
	return response.json().then(json => {
		if (response.ok)
			return json;
		else
			return Promise.reject(json);
	})
} ;