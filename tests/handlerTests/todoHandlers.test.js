const {getHandler, postHandler, deleteHandler, putHandler} = require('../../src/handlers/todoHandler.js');
const fileUtils = require('../../src/utils/fileOperations.js'); 

describe('The function getHandler', () => {
	it ('should call readJson', async() => {
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue('{"status":"abc"}');
		const mockHandler = {
			response: jest.fn(
				() => {
					return '{"status":"abc"}';
				}
			),
		};
		const result = await getHandler(null, mockHandler);
		expect(mockHandler.response).toHaveBeenCalled();
		expect(result).toBe('{"status":"abc"}');
		mockReadJSON.mockRestore();
	});
});
describe('The function postHandler', () => {
	it ('should call writeToJson and call response with Data saved', async () => {
		const mockHandler = {
			response: jest.fn(
				() => {
					return {};
				}
			),
		};
		const mockRequest = {
			payload: {
				'title': 'task2',
				'describe' : 'complete post api',
			}
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases'}]});
		const mockWriteJSON=jest.spyOn(fileUtils,'writeToJson');
		await postHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
		expect(mockHandler.response).toHaveBeenCalledWith('Data saved');
		mockReadJSON.mockRestore();
	});
});
describe('The function deleteHandler', () => {
	it ('should call writeJson and call response with deleted successfully', async() => {
		const mockHandler = {
			response: jest.fn(
				() => {
					return {};
				}
			),
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f7'}]});
		const mockWriteJSON=jest.spyOn(fileUtils,'writeToJson');
		await deleteHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
		expect(mockHandler.response).toHaveBeenCalledWith('deleted successfully');
		mockReadJSON.mockRestore();
	});
	it ('should call response with note does not exists when there is no note with given id', async() => {
		const codeMock = jest.fn();
		const mockHandler = {
			response: jest.fn(
				() => {
					return {code: codeMock};
				}
			),
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f6'}]});
		await deleteHandler(mockRequest, mockHandler);
		// expect(codeMock).toHaveBeenCalledWith(204);
		expect(mockHandler.response).toHaveBeenCalledWith('Note does not exists');
		mockReadJSON.mockRestore();
	});
});
describe('The function putHandler', () => {
	it ('should call writeJson and call response with deleted successfully', async() => {
		const mockHandler = {
			response: jest.fn(
				() => {
					return {};
				}
			),
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f7'}]});
		const mockWriteJSON=jest.spyOn(fileUtils,'writeToJson');
		await putHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
		expect(mockHandler.response).toHaveBeenCalledWith('updated successfully');
		mockReadJSON.mockRestore();
	});
	it ('should call response with note does not exists when there is no note with given id', async() => {
		const codeMock = jest.fn();
		const mockHandler = {
			response: jest.fn(
				() => {
					return {code: codeMock};
				}
			),
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		mockReadJSON.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f6'}]});
		await putHandler(mockRequest, mockHandler);
		// expect(codeMock).toHaveBeenCalledWith(204);
		expect(mockHandler.response).toHaveBeenCalledWith('Note does not exists');
		mockReadJSON.mockRestore();
	});
});
