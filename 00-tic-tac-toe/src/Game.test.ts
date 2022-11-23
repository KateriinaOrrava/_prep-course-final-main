import { Game } from "./Game";
// pārbauda vai uzsākot spēli laukums ir pilnīgi tukšs
describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  //parbaudam vai uzklikšķinot pirmo reizi uz laukuma, tiek uzlikts X
  it("should place X on click", () => {
    //pirms veikt katru testu izveido jaunu spēli
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",edfad
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
});
