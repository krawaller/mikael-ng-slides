import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
  private heroes = ["foo", "bar", "baz"];
  getHeroes(){
    let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.heroes)
      },1000)
    })
    return promise;
  }
}