var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x000000
});

document.body.appendChild(app.view);

PIXI.loader
  .add("assets/stars.png")
  .add("assets/hills1.png")
  .load(setup)

function setup() {
  var stars = new PIXI.extras.TilingSprite(
    PIXI.loader.resources["assets/stars.png"].texture,
    app.renderer.width,
    app.renderer.height
  );
  app.stage.addChild(stars);

  var hills1 = new PIXI.extras.TilingSprite(
    PIXI.loader.resources["assets/hills1.png"].texture,
    app.renderer.width,
    app.renderer.height
  );
  app.stage.addChild(hills1);

  app.ticker.add(function() {
    stars.tilePosition.x -= 0.1;
    hills1.tilePosition.x -= 0.3;
  })
}
