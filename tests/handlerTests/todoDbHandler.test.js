const {getNotes, postNotes} = require('../../src/handlers/todoDbHandler.js');
const dbUtils = require('../../src/utils/dbOperations.js'); 

describe('The function getNotes', () => {
	it ('should call getNotes', async() => {
		const mockDbGet = jest.spyOn(dbUtils, 'get');
		mockDbGet.mockResolvedValue('{"status":"abc"}');
		const mockHandler = {
			response: jest.fn(
				() => {
					return '{"status":"abc"}';
				}
			),
		};
		const result = await getNotes(null, mockHandler);
		expect(mockHandler.response).toHaveBeenCalled();
		expect(result).toBe('{"status":"abc"}');
		mockDbGet.mockRestore();
	});
});
describe('The function postNotes', () => {
	it ('should call postNotes and call response with Data saved', async () => {
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
		const mockDbGet = jest.spyOn(dbUtils, 'get');
		mockDbGet.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases'}]});
		const mockDbInsert = jest.spyOn(dbUtils,'insert');
		await postNotes(mockRequest, mockHandler);
		expect(mockDbInsert).toHaveBeenCalled();
		expect(mockHandler.response).toHaveBeenCalledWith('Data saved');
		mockDbInsert.mockRestore();
	});
});
// describe('The function deleteNotes', () => {
// 	it ('should call deleteNotes and call response with deleted successfully', async() => {
// 		const mockHandler = {
// 			response: jest.fn(
// 				() => {
// 					return {};
// 				}
// 			),
// 		};
// 		const mockRequest = {
// 			params: {
// 				id: 'd039d713-953a-492f-be72-6140b021f6f7',
// 			}
// 		};
// 		const mockdeleteDb = jest.spyOn(dbUtils, 'deleteQuery');
// 		mockdeleteDb.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f7'}]});
// 		await deleteNotes(mockRequest, mockHandler);
// 		expect(mockdeleteDb).toHaveBeenCalled();
// 		expect(mockHandler.response).toHaveBeenCalledWith('deleted successfully');
// 		mockdeleteDb.mockRestore();
// 		sequelize.close();
// 	});
// });
// describe('The function putNotes', () => {
// 	it ('should call updateNotes and call response with deleted successfully', async() => {
// 		const mockHandler = {
// 			response: jest.fn(
// 				() => {
// 					return {};
// 				}
// 			),
// 		};
// 		const mockRequest = {
// 			params: {
// 				id: 'd039d713-953a-492f-be72-6140b021f6f7',
// 			}
// 		};
// 		const mockUpdateDb = jest.spyOn(dbUtils, 'updateQuery');
// 		mockUpdateDb.mockResolvedValue({'notes': [{'title':'task1', 'description':'Testcases', 'id':'d039d713-953a-492f-be72-6140b021f6f7'}]});
// 		await putNotes(mockRequest, mockHandler);
// 		expect(mockUpdateDb).toHaveBeenCalled();
// 		expect(mockHandler.response).toHaveBeenCalledWith('updated successfully');
// 		mockUpdateDb.mockRestore();
// 	});
// });