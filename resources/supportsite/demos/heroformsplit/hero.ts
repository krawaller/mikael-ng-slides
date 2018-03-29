export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}

export const powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];