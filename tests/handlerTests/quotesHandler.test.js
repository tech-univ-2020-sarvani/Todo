const axios = require('axios').default;
const quotesHandler = require('../../src/handlers/quotesHandler.js');

describe('The function quotesHandler', () => {
	it('should calls response with content and author', async() => {
		const mockResponse = {
			data: {
				content:'Happy day',
				author:'sarvani'
			}
		};
		const codeMock = jest.fn();
		const mockHandler = {
			response: jest.fn(()=>{
				return {code: codeMock};
			})
		};
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(mockResponse);
		await quotesHandler(null, mockHandler);
		expect(codeMock).toHaveBeenCalledWith(200);
		expect(mockHandler.response).toHaveBeenCalledWith('Happy day by sarvani');
		mockAxios.mockRestore();
	});
	it ('should call response with error message when the api call fails', async () => {
		const codeMock = jest.fn();
		const mockHandler = {
			response: jest.fn(()=>{
				return {code: codeMock};
			})
		};
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockRejectedValue(new Error('API call failed'));
		await quotesHandler(null, mockHandler);
		expect(codeMock).toHaveBeenCalledWith(500);
		expect(mockHandler.response).toHaveBeenCalledWith('API call failed');
		mockAxios.mockRestore();
	});
	it ('should return 204 when api returns empty data object or empty object', async() => {
		const mockResponse = {
			data: undefined
		};
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(mockResponse);
		const codeMock = jest.fn();
		const mockHandler = {
			response: jest.fn(()=>{
				return {code: codeMock};
			})
		};
		await quotesHandler(null, mockHandler);
		expect(codeMock).toHaveBeenCalledWith(204);
		expect(mockHandler.response).toHaveBeenCalledWith('No content');
		mockAxios.mockRestore();
	});
});