import ApiService from './ApiService';

export default class ProductService extends ApiService {
  public async getProducts(search: string): Promise<any> {
    try {
      const response = await this.api.get('/product?search=' + search);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public async getProduct(id: string): Promise<any> {
    try {
      const response = await this.api.get('/product/' + id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}