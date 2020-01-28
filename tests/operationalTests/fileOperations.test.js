const {readJson, writeToJson} = require('../../src/utils/fileOperations');
const fs = require('promise-fs');

describe('The function readJson', () => {
	it('should call the readFile function',async()=>{
		const mockReadFile=jest.spyOn(fs,'readFile');
		mockReadFile.mockImplementation(()=>'{"status":"abc"}');
		const result = await readJson('./resources/notes.json');
		expect(mockReadFile).toHaveBeenCalled();
		expect(result.status).toBe('abc');
	});
});

describe('The function writeJson', () => {
	it('writeJSON should call the writeFile function',async()=>{
		const mockWriteFile=jest.spyOn(fs,'writeFile');
		mockWriteFile.mockImplementation(()=> '{"status":"abc"}');
		await writeToJson('./resources/notes.json','{"status":"abc"}');
		expect(mockWriteFile).toHaveBeenCalled();
		// expect(mockWriteFile).toHaveBeenCalledWith('./notes.json','{"status":"abc"}');
	});
});