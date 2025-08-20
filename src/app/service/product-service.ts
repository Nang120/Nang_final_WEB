import { Injectable } from '@angular/core';
declare var axios: any;
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product: any[] = [];
  getProducts() {
    return this.product;
  }
  constructor() {
    let ng_This = this;
    $.LoadingOverlay('show');
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response: any) {
        ng_This.product = response.data;
        $.LoadingOverlay('hide');
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});

    axios
      .get('/user', {
        params: {
          ID: 12345,
        },
      })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});

    async function getUser() {
      try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
