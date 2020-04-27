import service from '../../src/services/cart';
import http from '../../src/core/http';

describe('Cart Service', () => {

    http.get = jest.fn();
    http.post = jest.fn();
    http.delete = jest.fn();

    it('should gernate return id', async () => {
        http.post.mockResolvedValue({
            data: {
                id: 1
            }
        });
        const data = await service.generate();
        expect(data).toEqual(1);
    });

    it('should get return id', async () => {
        http.get.mockResolvedValue({
            data: 1
        });
        const data = await service.get(1);
        expect(data).toEqual(1);
    });

    it('should addToCart return id', async () => {
        http.post.mockResolvedValue({
            data: 1
        });
        const data = await service.addToCart(1);
        expect(data).toEqual(1);
    });

    it('should updateQuantity return id', async () => {
        http.post.mockResolvedValue({
            data: 1
        });
        const data = await service.updateQuantity(1);
        expect(data).toEqual(1);
    });

    it('should removeItem return id', async () => {
        http.delete.mockResolvedValue({
            data: 1
        });
        const data = await service.removeItem(1);
        expect(data).toEqual(1);
    });

    it('should checkout return id', async () => {
        http.post.mockResolvedValue({
            data: 1
        });
        const data = await service.checkout(1);
        expect(data).toEqual(1);
    });

})