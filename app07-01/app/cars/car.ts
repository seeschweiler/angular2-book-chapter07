export class Car {
  constructor(
    public id: string,
    public brand: string,
    public model: string,
    public fuelType?: string,
    public bodyStyle?: string,
    public topSpeed?: number,
    public power?: number
  ) {}
}