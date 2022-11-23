/*te ir fefinēts tas, ka tipa vērtība var būt viena no zemāk norādītām 
un nekas cits*/
export type XO = "X" | "O" | "-";
// šīs projekts ļauj ieskatīties tajā, kā notiek  "test driven development"
/*Test-driven development (TDD) is a software development process 
relying on software requirements being converted to test cases before
 software is fully developed, and tracking all software development by 
 repeatedly testing the software against all test cases. This is as 
 opposed to software being developed first and test cases created later.*/
export class Game {
  /*te definēts sākotnējs tukšs masīvs - oriģinālā sākotnējā versija, 
  kas turpmāk tiks izmainīta - starta stāvoklis*/
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  /*te ir definēts, ka pirmā vērtība, kas tiks ielikta laukumiņā būs "X"*/
  turn: XO = "X";
  //funkcija, kas atgriež masīvu ar 9 vertībām
  getCells(): XO[] {
    return this.cells;
  }
  //šī funkcija paņem turn vērtību
  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    //checks if the first row is filled by the same player
    if (
      this.getCells()[0] === this.getCells()[1] &&
      this.getCells()[1] === this.getCells()[2]
    ) {
      return this.getCells()[0];
    }
    //for second row
    if (
      this.getCells()[3] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[5]
    ) {
      return this.getCells()[3];
    }
    //for third row
    if (
      this.getCells()[6] === this.getCells()[7] &&
      this.getCells()[7] === this.getCells()[8]
    ) {
      return this.getCells()[6];
    }

    //for first column
    if (
      this.getCells()[0] === this.getCells()[3] &&
      this.getCells()[3] === this.getCells()[6]
    ) {
      return this.getCells()[0];
    }
    //for second column
    if (
      this.getCells()[1] === this.getCells()[4] &&
      this.getCells()[7] === this.getCells()[4]
    ) {
      return this.getCells()[1];
    }
    //for third column
    if (
      this.getCells()[2] === this.getCells()[5] &&
      this.getCells()[5] === this.getCells()[8]
    ) {
      return this.getCells()[2];
    }
    //for first diag
    if (
      this.getCells()[0] === this.getCells()[4] &&
      this.getCells()[4] === this.getCells()[8] &&
      this.getCells()[0] !== "-"
    ) {
      return this.getCells()[0];
    }
    //for second diag
    if (
      this.getCells()[2] === this.getCells()[5] &&
      this.getCells()[4] === this.getCells()[6] &&
      this.getCells()[2] !== "-"
    ) {
      return this.getCells()[2];
    }

    return "-";
  }

  isTie(): boolean {
    const areAllCellsFilled: boolean = !this.getCells().includes("-");
    const isNoWinner: boolean = this.getWinner() === "-";

    return areAllCellsFilled && isNoWinner;
  }

  onClick(i: number): void {
    //tas lauciņš, kura tiks ieklikšķināts iegūs vērtību - X
    this.cells[i] = this.turn;
    this.turn = this.turn === "X" ? "O" : "X";
    //pēc "X" vienmēr sekos "O", tāpēc šeit tiek mainīta globālā TURN vertība

    /*pasaka kurā lauciņā ir ieklikšķināts 
    console.log(`cell ${i} clicked`);*/
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    console.log("restart called");
  }
}
