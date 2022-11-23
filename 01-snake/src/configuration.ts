interface Configuration {
  maxLevel: number;
  defaultSpeed: number;
  nbCellsX: number;
  nbCellsY: number;
}

const configuration: Configuration = {
  maxLevel: 10,
  //100 milisekundes.
  defaultSpeed: 100,
  nbCellsX: 45,
  nbCellsY: 25,
};

export default configuration;
