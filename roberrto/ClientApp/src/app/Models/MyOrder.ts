import { OrderItem } from "./OrderItem";

export interface MyOrder{
  id:number;
  orderDate:Date;
  adress:string;
  totalPrice:number;
  dateDelivered?:Date;
  dateShipped?:Date;
  orderItems:OrderItem [];
}
