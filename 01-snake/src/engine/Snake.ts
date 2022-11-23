import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  setDirection(direction: Direction) {}

  move() {
    const oldHead = this.getHead();
    this.head = new Cell(this.head.x + 1, this.head.y);
    this.tail.push(oldHead);
    this.tail.shift();
  }

  grow() {}

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
