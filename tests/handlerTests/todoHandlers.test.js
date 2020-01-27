const {getHandler, postHandler} = require('../../handlers/todoHandler.js');
const fileUtils = require('../../utils/fileOperations.js'); 

describe('The function getHandler', () => {
	// it('should return a statusCode 200', async (done) => {
	// 	const codeMock = jest.fn();
	// 	const mockHandler = {
	// 		response: jest.fn(() => {
	// 			return {code: codeMock};
	// 		}),
	// 	};
	// 	await operations.getHandler(null, mockHandler);
	// 	expect(codeMock).toHaveBeenCalledWith(200);
	// 	done();
	// });
	it ('should call readJson', async() => {
		const mockReadJSON=jest.spyOn(fileUtils,'readJson');
		mockReadJSON.mockImplementation(()=>'{"status":"abc"}');
		const result = await getHandler(null,{'response':()=>'{"status":"abc"}'});
		expect(mockReadJSON).toHaveBeenCalled();
		expect(result).toBe('{"status":"abc"}');
	});
});
describe('The function postHandler', () => {
	it ('should call writeToJson', () => {
		const mockWriteJSON=jest.spyOn(fileUtils,'WriteToJson');
		mockReadJSON.mockImplementation(()=>'{"status":"abc"}');
		const result = await postHandler(null,{'response':()=>'Data saved'});
		expect(mockWriteJSON).toHaveBeenCalled();
		expect(result).toBe('Data saved');
	});
});