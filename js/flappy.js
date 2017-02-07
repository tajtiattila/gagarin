PIXI.loader
  .add("assets/stars.png")
  .load(setup)

function setup() {
  // Renderer létrehozása
  var renderer = PIXI.autoDetectRenderer();

  // Renderer nézet hozzáadása a body-hoz
  document.body.appendChild(renderer.view);

  // Színtér létrehozása az elemeknek
  var stage = new PIXI.Container();

  // Stage kirajzolása a rendererre
  renderer.render(stage);
}
