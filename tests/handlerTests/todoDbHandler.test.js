const {getNotes, postNotes} = require('../../src/handlers/todoDbHandler.js');
const dbUtils = require('../../src/utils/dbOperations.js'); 
const uuid = require('uuid');
describe('the getNotes handler function,', () => {  

	it('should call h.response with success message when /notes is hit with GET', async () => {
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(() => {
				return {
					code: mockCode
				};
			})
		};
		const mockSelectNotesDB = jest.spyOn(dbUtils, 'getNotes');
		const mockSelectNotesDBResponse = {
			notes: [
				{
					title: 'New Note',
					description: 'Injected note',
					noteId: uuid(),
					isActive: true
				}
			] 
		};
		mockSelectNotesDB.mockResolvedValue(mockSelectNotesDBResponse);
		await getNotes(null, mockH);
		expect(mockH.response).toHaveBeenCalledWith(mockSelectNotesDBResponse);
		expect(mockCode).toHaveBeenCalledWith(200);
		mockSelectNotesDB.mockRestore();
	});

	it('should return a statusCode: 500 when the file read fails', async (done) => {
		const mockSelectNotesDB = jest.spyOn(dbUtils, 'getNotes');
		mockSelectNotesDB.mockRejectedValue(new Error('DB select failed'));
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(() => ({ 
				code: mockCode 
			}))
		};
		await getNotes(null, mockH);
		expect(mockCode).toHaveBeenCalledWith(500);
		expect(mockH.response).toHaveBeenCalledWith('DB select failed');
		mockSelectNotesDB.mockRestore();
		done();
	});

});

describe('the postNote handler function,', () => {  

	it('should call h.response with success message when /notes is hit with POST', async (done) => {
		const mockRequest = {
			payload: {
				title: 'Note new',
				description: 'Note new description'
			}
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(() => {
				return{
					code: mockCode
				};
			})
		};	
		const mockInsertNoteDB = jest.spyOn(dbUtils, 'insetNote');
		mockInsertNoteDB.mockResolvedValue();
		await postNotes(mockRequest, mockH);
		expect(mockH.response).toHaveBeenCalledWith('Note added');
		expect(mockCode).toHaveBeenCalledWith(200);
		mockInsertNoteDB.mockRestore();
		done();
	});

	it('should return statusCode: 500 adding new note fails', async (done) => {
		const mockRequest = {
			payload: {
				title: 'Note new',
				description: 'Note new description'
			}
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(() => {
				return{
					code: mockCode
				};
			})
		};	
		const mockInsertNoteDB = jest.spyOn(dbUtils, 'insertNote');
		mockInsertNoteDB.mockRejectedValue(new Error('Failed to add note'));
		await postNotes(mockRequest, mockH);
		expect(mockH.response).toHaveBeenCalledWith('Failed to add note');
		expect(mockCode).toHaveBeenCalledWith(500);
		mockInsertNoteDB.mockRestore();
		done();
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