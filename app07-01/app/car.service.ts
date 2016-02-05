import {Injectable} from 'angular2/core';
import {Car} from './car';
import * as _ from 'underscore';


@Injectable()
export class CarService {
  getCars() {
    return carsPromise;
  }
  getCar(id:string) {
    return carsPromise.then(cars => cars.filter(car => car.id == id)[0]);
  }
  addCar(newCar: Car) {
    CARS.push(newCar);
  }
}

var CARS = [
  new Car(_.uniqueId('car_'), 'BMW', 'X5', 'Diesel', 'Suvs', 250, 250),
  new Car(_.uniqueId('car_'), 'BMW', 'X1', 'Diesel', 'Suvs', 200, 150)
];

var carsPromise = Promise.resolve(CARS);