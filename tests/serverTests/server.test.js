const fs = require('promise-fs');
const start = require('../../server.js');
const server = start();

const init = async ()=> {
	await server.initialize();
	return server;
};
describe('In the server', () => {
	let server;

	beforeEach(async () => {
		server = await init();
	});

	afterEach(async () => {
		await server.stop();
	});
	
	it ('The route GET /notes should return the contents from the file', async () => {
		const jsonObj = await fs.readFile('./resources/notes.json', 'utf8');
		const options = {
			method: 'GET',
			url: '/notes',
		};
		const response = await server.inject(options);
		
		expect(response.result).toBe(jsonObj);
	});
	it('The route POST /notes should return a statusCode 200', async () => {
		const options = {
			method: 'post',
			url: '/notes',
			payload: {
				'title':'Hapi',
				'description': 'Read the documentation of hapi',
			}
		};
		const response = await server.inject(options);
		expect(response.statusCode).toBe(200);
	});
	it('The route POST /notes should save the contents of payload in the file', async () => {
		const options = {
			method: 'post',
			url: '/notes',
			payload: {
				'title':'Hapi',
				'description': 'Read the documentation of hapi',
			}
		};
		const response = await server.inject(options);
		expect(response.result).toBe('Data saved');
	});
	it ('The route DELETE /notes/id should return a statuscode 200', async () => {
		const options = {
			method: 'DELETE',
			url: '/notes/5deb4192-eb38-4d76-8021-a6b3d4685353',
		};
		const response = await server.inject(options);
		expect(response.statusCode).toBe(200);
	});
	it ('The route PUT /notes/id should return a statuscode 200', async () => {
		const options = {
			method: 'PUT',
			url: '/notes/5deb4192-eb38-4d76-8021-a6b3d4685353',
		};
		const response = await server.inject(options);
		expect(response.statusCode).toBe(200);
	});
	it ('The route GET /quotes should return a statuscode 200', async () => {
		const options = {
			method: 'GET',
			url: '/quotes',
		};
		const response = await server.inject(options);
		expect(response.statusCode).toBe(200);
	});
});
