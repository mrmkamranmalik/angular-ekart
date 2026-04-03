import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name = "John Smith";
  addToCart = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: "Black",
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png'
  };
  listOfString : string[] = ['Mark','Steve','Merry']

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
  decrementCartValue() {
    if (this.addToCart > 0)
      this.addToCart--;
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock)
    this.addToCart++;
  }

}
