import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.page.html',
  styleUrls: ['./menu-tab.page.scss'],
})
export class MenuTabPage implements OnInit {

  selectedCategory: string = 'PIZZA';
  categories: string[] = ['PIZZA', 'BURGER', 'DESSERTS', 'SNACKS', 'DRINKS'];
  pizzaProducts = [
    {imgPath: 'https://img1.wsimg.com/isteam/stock/2999/:/', price: 12.50 , name: 'Cheese burst pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeN9ZmxOgfpz2fNKoay9gqh5sgKCkpSzbjEYbNuby5dhnJV-_C', price: 15 , name: 'Tomato corn pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2VIH8gqiZXtM5XbkSKefPMidImjnfSku_imKBCEaOB8Xxhdba', price: 5.90 , name: 'Cheesy smoke paper pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7x6T2N0tJvT5QUkVL4ebbU-0CLxlpFGtT9kHwVttKu8odx3x5', price: 2.5 , name: 'Mashroom magic pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2laiUvjvONmyzXwco_fMEuulEB2vFhX1tCUcjwb02NU5d4gC', price: 16.2 , name: 'Corn paper pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2IO9fCVl7YpNo5wv2CtMOBKUNVBc5W47sh_wUOTwdzkgtwqW', price: 15.5 , name: 'Tasty herbs pizza'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIGsLK0SsZ7lG0JcJI5oDEu3yfim78gfTwAqJkGixwo19TIkEi', price: 8.95 , name: 'Veggy cheesy smoky pizza'},
    {imgPath: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x375.jpg', price:  4.5, name: 'Paneer pyara pizza'}
  ];
  burgerProducts = [
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr12w46jsCKxktN9BXHUJIqCevRZAvPIVKNJkDoI4UpEdyEHkK', price: 12.50, name: 'Aloo tikki burger'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_gjQD-qDUIRd23JT36NRkzZyAsoWzfZ6lngWMkDPqv9x_1e3O', price: 5.50, name: 'Fresh paneer burger'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOtgZD6lAG5SzIwAyuSpcm5_BCHlowjYY-92M0XRrjEwP5OAvs', price: 6.50, name: 'Cheese regular'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW-O0XOzIyC3kYGwDDSggxg8fmHQG9PZQ6A47swIi3NOPcKQ_5', price: 9, name: 'Masala magic burger'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS8UqX9n2WHrP5EKfpxKV_tGY8oHUiCmVbttP65SXiBOQRrl3e', price: 12, name: 'Corn paper paneer'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfASPBD0EMycAVIeKolF-M9i3XXJ4j77bnlaes7NwqHiVipbs', price: 10, name: 'Peas wopper burger'}
  ]
  dessertsProducts = [
    {imgPath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/rocky-road-cheesecake-pudding.jpg', price: 7.5, name: 'Choclate bisclate'},
    {imgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Desserts.jpg', price: 9, name: 'Choco scuba'},
    {imgPath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190326-pin-a-colada-bars-259-1555081178.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*', price: 5, name: 'Sweet straberry'},
    {imgPath: 'https://i.pinimg.com/originals/b2/5b/56/b25b560ed6f5b4d8372aa508878ab9b8.jpg', price: 6.5, name: 'Choco pineapple'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKOd9cBYMvLtt_KPPJO4SO1oAzKgHkkGSkODC3hy5sU8vD60UX', price: 4.5, name: 'Orange masti'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLvzPFeEZPC5fZRu1qMVqYEM9ejv-hjbf0Km5IEI9b3jLMjBrC', price: 5, name: 'Choclate white sauce'},
    {imgPath: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Mini-Chocolate-Wafer-Cakes_exps106462_TH2379807A11_02_5bC_RMS.jpg', price: 6, name: 'Sweet slime'},
  ]
  snacksProducts = [
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU3c9_IuP9R7KqnuhfmYBDjMW4nuYvgVXxCVHR77FOG7PDw8mh', price: 11, name: 'Basket bunch'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEkjJdQR0kZPyX5D0DALOWWOtWOIDCo9ubElmcwtejG006Lxz3', price: 8, name: 'Paneer masala'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-CNLkyisNzItwAoVq9WOcgcxJfkw2AACsp32Z9K3N1eSbJHid', price: 12, name: 'Corn smosa'},
    {imgPath: 'https://drop.ndtv.com/albums/COOKS/indian-snacks/til-e-paneer.jpg', price: 10, name: 'Crunchy kachori'},
    {imgPath: 'https://www.thestatesman.com/wp-content/uploads/2017/10/food-samosas.jpg', price: 7, name: 'Masala papad'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxeDNkRGZCQoMzQ4y2TTgajMOu5yhtpyEj4ZC7mChXs69lUB8a', price: 6, name: 'Matric bhujia'}
  ]
  drinksProducts = [
    {imgPath: 'https://miro.medium.com/max/11520/1*wRSrqe_WdsPsv4XdHDou6Q.jpeg', price: 2, name: 'Thandai mix'},
    {imgPath: 'https://c.ndtvimg.com/2019-06/1m2a2or8_vitamin-c-rich-drinks_625x300_25_June_19.jpg', price: 4, name: 'Lassi lajwab'},
    {imgPath: 'https://snacksandsips.com/wp-content/uploads/2018/08/02-Cherry-Lemonade.jpg', price: 5.5, name: 'Aam panna'},
    {imgPath: 'https://pizzazzerie.com/wp-content/uploads/2015/07/cherry-lemonade-recipe-pizzazzerie.jpg', price: 6, name: 'Sikanji soda'},
    {imgPath: 'https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg', price: 7, name: 'Shrabati sabab'},
    {imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD-X5xnvAQXT_T59BU1_acOxlUo3A1TNW23V6Y7KaCPYWWLr5A', price: 3.5, name: 'Kokam shrabat'}
  ]
  viewProducts =[];
  constructor(private router: Router) { }
  ngOnInit() {
    this.viewProducts =  this.pizzaProducts;
  }
  onCategoryTabChange(event){
    console.log("sdfsdfsdf", event.detail.value);
    if(event.detail.value == 'PIZZA'){
      this.viewProducts = this.pizzaProducts;
    }
    else if(event.detail.value == 'BURGER'){
      this.viewProducts =  this.burgerProducts;
    }
    else if(event.detail.value == 'DESSERTS'){
      this.viewProducts =  this.dessertsProducts;
    }
    else if(event.detail.value == 'SNACKS'){
      this.viewProducts =  this.snacksProducts;
    }
    else if(event.detail.value == 'DRINKS'){
      this.viewProducts =  this.drinksProducts;
    }
  }
  onProductClick(){
    this.router.navigate(['/menu-tab/view-product']);
  }
}
