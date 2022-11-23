//te ir fefinēts tas, ka tipa vērtība var būt viena no zemāk norādītām un nekas cits
export type XO = "X" | "O" | "-";
// šīs projekts ļauj ieskatīties tajā, kā notiek  "test driven development"
/*Test-driven development (TDD) is a software development process 
relying on software requirements being converted to test cases before
 software is fully developed, and tracking all software development by 
 repeatedly testing the software against all test cases. This is as 
 opposed to software being developed first and test cases created later.*/
export class Game {
  //te definēts sākotnējs tukšs masīvs
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return "X";
  }

  getWinner(): XO {
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    this.getCells()[i] = "X";
    /*pasaka kurā lauciņā ir ieklikšķināts 
    console.log(`cell ${i} clicked`);*/
  }

  restart(): void {
    console.log("restart called");
  }
}
