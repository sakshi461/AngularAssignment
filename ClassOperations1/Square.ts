import {Rectangle} from './Rectangle';

export class Square extends Rectangle{
    length:number;
    breadth:number;
    area:number;
    constructor(l:number){
        super(l,l);
        this.length=l;
        this.breadth=l;
        this.area=0;
    }

    override myArea(): void {
        this.area=this.length*this.breadth;
    }
    display(){

        console.log(`
            ---- Rectangle Area---
            Length  :: ${this.length}
            Area    :: ${this.area}
        `)

    }


}