const {getHandler, postHandler, deleteHandler} = require('../../src/handlers/todoHandler.js');
const fileUtils = require('../../src/utils/fileOperations.js'); 

describe('The function getHandler', () => {
	it ('should call readJson', async(done) => {
		const mockHandler = {
			response: ()=>{},
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		await getHandler(null, mockHandler);
		expect(mockReadJSON).toHaveBeenCalled();
		done();
	});
});
describe('The function postHandler', () => {
	it ('should call writeToJson', async (done) => {
		const mockHandler = {
			response: () => {},
		};
		const mockRequest = {
			payload: {
				'title': 'task3',
				'describe' : 'complete post api',
			}
		};
		const mockWriteJSON = jest.spyOn(fileUtils,'writeToJson');
		await postHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
		done();
	});
});
describe('The function deleteHandler', () => {
	it ('should call writeJson', async() => {
		const mockHandler = {
			response: () => {},
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockWriteJSON=jest.spyOn(fileUtils,'writeToJson');
		await deleteHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
	});
});

describe('The function putHandler', () => {
	it ('should call writeJson', async() => {
		const mockHandler = {
			response: () => {},
		};
		const mockRequest = {
			params: {
				id: 'd039d713-953a-492f-be72-6140b021f6f7',
			}
		};
		const mockWriteJSON=jest.spyOn(fileUtils,'writeToJson');
		await deleteHandler(mockRequest, mockHandler);
		expect(mockWriteJSON).toHaveBeenCalled();
	});
});

describe('The function quotesHandler', () => {
	it ('should call readJson', async(done) => {
		const mockHandler = {
			response: ()=>{},
		};
		const mockReadJSON = jest.spyOn(fileUtils, 'readJson');
		await getHandler(null, mockHandler);
		expect(mockReadJSON).toHaveBeenCalled();
		done();
	});
});