var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x000000
});

document.body.appendChild(app.view);

PIXI.loader
  .add("assets/stars.png")
  .load(setup)

function setup() {
  var stars = new PIXI.extras.TilingSprite(
    PIXI.loader.resources["assets/stars.png"].texture,
    app.renderer.width,
    app.renderer.height
  );
  app.stage.addChild(stars);

  app.ticker.add(function() {
    stars.tilePosition.x -= 1;
  })
}
