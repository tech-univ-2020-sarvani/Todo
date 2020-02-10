const dbUtils = require('../../src/utils/dbOperations');
const sequelize = require('../../src/utils/connection');
const db = require('../../models/index');

describe('In the dbOperations', () => {
	describe('The function get', () => {
		it ('should call db.notes.findAll()', async() => {
			const mockSequelizeQuery = jest.spyOn(db.notes,'findAll');
			mockSequelizeQuery.mockResolvedValue('[{"status":"abc"}]');
			const result = await dbUtils.get('', {});
			expect(mockSequelizeQuery).toHaveBeenCalled();
			expect(result).toBe('[{"status":"abc"}]');
			mockSequelizeQuery.mockRestore();
		});
		// it ('should throw an error', async() => {
		// 	const mockSequelizeQuery = jest.spyOn(sequelize,'query');
		// 	mockSequelizeQuery.mockRejectValue(new Error('API call failed'));
		// 	const result = await dbUtils.get('', {});
		// 	expect(mockSequelizeQuery).toHaveBeenCalled();
		// 	expect(result).toBe('API call failed');
		// 	mockSequelizeQuery.mockRestore();
		// });
	});
	describe('The function insert', () => {
		it ('should call sequelize.query', async() => {
			const mockSequelizeQuery = jest.spyOn(db.notes,'create');
			mockSequelizeQuery.mockResolvedValue('[{"status":"abc"}]');
			const result = await dbUtils.insert('INSERT INTO notes values("task3", "description", "1", "true"', {});
			expect(mockSequelizeQuery).toHaveBeenCalled();
			expect(result).toBe('[{"status":"abc"}]');
			mockSequelizeQuery.mockRestore();
		});
	});
	describe('The function deleteQuery', () => {
		it ('should call sequelize.query', async() => {
			const mockSequelizeQuery = jest.spyOn(sequelize,'query');
			mockSequelizeQuery.mockResolvedValue('[{"status":"abc"}]');
			const result = await dbUtils.deleteQuery('DELETE from notes where id = 1', {});
			expect(mockSequelizeQuery).toHaveBeenCalled();
			expect(result).toBe('[{"status":"abc"}]');
			mockSequelizeQuery.mockRestore();
		});
	});
	describe('The function updateQuery', () => {
		it ('should call sequelize.query', async() => {
			const mockSequelizeQuery = jest.spyOn(sequelize,'query');
			mockSequelizeQuery.mockResolvedValue('[{"status":"abc"}]');
			const result = await dbUtils.updateQuery('UPDATE notes set isactive = false where id = 1', {});
			expect(mockSequelizeQuery).toHaveBeenCalled();
			expect(result).toBe('[{"status":"abc"}]');
			mockSequelizeQuery.mockRestore();
		});
	});
});