const fs = require('promise-fs');
const server = require('./server.js');
const uuid = require('uuid');

describe('The route GET /notes', () => {
	it ('should return the contents from the file', async (done) => {
		const jsonObj = await fs.readFile('./notes.json', 'utf8');
		const options = {
			method: 'GET',
			url: '/notes',
		};
		const response = await server.inject(options);
		
		expect(response.result).toBe(jsonObj);
		done();
	});
});
describe('The route POST /notes', () => {
	it('should return a statusCode 200', async (done) => {
		const options = {
			method: 'post',
			url: '/notes',
			payload: {}
		};
		const response = await server.inject(options);
		// console.log(response);
		expect(response.statusCode).toBe(200);
		done();
	});
	it('should save the contents of payload in the file', async (done) => {
		const options = {
			method: 'post',
			url: '/notes',
			payload: {
				'title':'Hapi',
				'description': 'Read the documentation of hapi',
				'id': uuid(),
				'active': true
			}
		};
		const response = await server.inject(options);
		// console.log(response);
		expect(response.result).toBe('Data saved');
		done();
	});
	// it('should fail in adding the contents to file, if the object has no id', async (done) => {
	// 	const options = {
	// 		method: 'post',
	// 		url: '/notes',
	// 		payload: {
	// 			'title':'Hapi',
	// 			'description': 'Read the documentation of hapi',
	// 			'active': true
	// 		}
	// 	};
	// 	const response = await server.inject(options);
	// 	console.log(response);
	// 	expect(response.statusCode).toBe(500);
	// 	done();
	// });
});