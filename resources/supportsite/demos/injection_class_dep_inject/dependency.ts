import {Injectable} from '@angular/core'

import Dependency2 from './dependency2'

@Injectable()
export default class Dependency {
  constructor(public foo:Dependency2){}
}