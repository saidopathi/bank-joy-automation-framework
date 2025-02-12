const request = require('supertest');

const fetchForexRate = async (currencyPair) => {
    const response = await request('https://www.bankofcanada.ca/valet/observations')
        .get(`/FX${currencyPair}/json`);
    return response;
};

describe('Bank of Canada API Tests', () => {
    test('Fetch CAD to USD exchange rates for last 10 weeks', async () => {
        const response = await fetchForexRate('USDCAD');
        
        console.log('--- Fetch CAD to USD exchange rates ---');
        console.log('Response Code:', response.status);
        console.log('Response Body:', JSON.stringify(response.body, null, 2));

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('observations');
        
        const observations = response.body.observations;
        expect(observations.length).toBeGreaterThanOrEqual(10);

        observations.forEach(obs => {
            expect(obs).toHaveProperty('FXUSDCAD');
            expect(obs.FXUSDCAD.v).toMatch(/^[0-9.]+$/);
        });
    });

    test('Handle incorrect API endpoint gracefully', async () => {
        const response = await request('https://www.bankofcanada.ca/valet/observations')
            .get('/INVALID_ENDPOINT/json');
        
        console.log('--- Handle incorrect API endpoint gracefully ---');
        console.log('Response Code:', response.status);
        console.log('Response Body:', JSON.stringify(response.body, null, 2));

        expect(response.status).toBe(404);
    });

    test('Handle request with invalid currency pair gracefully', async () => {
        const response = await fetchForexRate('INVALIDPAIR');
        
        console.log('--- Handle request with invalid currency pair ---');
        console.log('Response Code:', response.status);
        console.log('Response Body:', JSON.stringify(response.body, null, 2));

        expect(response.status).toBe(404);
    });

    test('Handle request with incorrect date parameter values gracefully', async () => {
        const response = await request('https://www.bankofcanada.ca/valet/observations')
            .get('/FXUSDCAD/json?start_date=dummyDate&end_date=dummyDate');
        
        console.log('--- Handle request with missing parameters ---');
        console.log('Response Code:', response.status);
        console.log('Response Body:', JSON.stringify(response.body, null, 2));

        expect(response.status).toBe(400);
    });



    test('Handle request with unsupported currency pair gracefully', async () => {
        const response = await fetchForexRate('INVALIDAUDUSD');
        
        console.log('--- Handle unsupported currency pair gracefully ---');
        console.log('Response Code:', response.status);
        console.log('Response Body:', JSON.stringify(response.body, null, 2));

        expect(response.status).toBe(404);
    });
});
