import { Employee } from "./models/Employee.js";
import { Manager } from "./models/Manager.js";
import { Order } from "./models/Order.js";
import { Product } from "./models/Product.js";
import { Student } from "./models/Student.js";

// 1
const employee = new Employee("John Smith");
console.log(employee.displayInfo());

const manager = new Manager("Jane Doe", "Sales");
console.log(manager.displayInfo());

// 2
const order = new Order(12345);
console.log(order);

const product_1 = new Product("Phone", 500);
console.log(product_1);
order.addProduct(product_1);
console.log(order);

const product_2 = new Product("Headphones", 100);
console.log(product_2);
order.addProduct(product_2);
console.log(order);

console.log(
  `Общая сумма заказа ${
    order.orderNumber
  } состовляет ${order.getTotalPrice()} тугриков.  `
);

// 3
const student = new Student();
console.log(student);
student.setName("Питер Паркер");
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
