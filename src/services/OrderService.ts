import ApiService from './ApiService';

export default class OrderService extends ApiService {
  public async getOrderById(idClient: string): Promise<any> {
    try {
      const response = await this.api.get('/order/client/' + idClient);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public async createOrder(): Promise<any> {
    try {
      const response = await this.api.post('/order', );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}