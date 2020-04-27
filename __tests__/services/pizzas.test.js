import service from '../../src/services/pizza';
import http from '../../src/core/http';

describe('Pizza Service', () => {

    http.get = jest.fn();

    it('should gernate return id', async () => {
        http.get.mockResolvedValue({
            data: {
                id: 1
            }
        });
        const data = await service.getPizzas();
        expect(data).toEqual(1);
    });
})