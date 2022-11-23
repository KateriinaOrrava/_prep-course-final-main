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

  //parbaudam vai uzklikšķinot otro reizi uz laukuma, tiek uzlikts O
  //***************************************************
  it("should place X or O on click", () => {
    //pirms veikt katru testu izveido jaunu spēli
    //iedod spēlei sākotnejo stāvokli
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    expect(game.getCells()).toEqual([
      "X",
      "O",
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

  it("should place win if row field with player", () => {
    //pirms veikt katru testu izveido jaunu spēli
    //iedod spēlei sākotnejo stāvokli
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should place win if row field with player", () => {
    //pirms veikt katru testu izveido jaunu spēli
    //iedod spēlei sākotnejo stāvokli
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(4);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "-",
      "X",
      "O",
      "-",
      "X",
      "-",
      "-",
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should place win if row field with player", () => {
    //pirms veikt katru testu izveido jaunu spēli
    //iedod spēlei sākotnejo stāvokli
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(3);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "-",
      "O",
      "X",
      "-",
      "-",
      "-",
      "X",
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
});
