var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x000000
});

document.body.appendChild(app.view);

PIXI.loader
  .add("assets/stars.png")
  .add("assets/hills1.png")
  .add("assets/hills2.png")
  .add("assets/sprites.json")
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

  var hills2 = new PIXI.extras.TilingSprite(
    PIXI.loader.resources["assets/hills2.png"].texture,
    app.renderer.width,
    app.renderer.height
  );
  app.stage.addChild(hills2);

  // bird sprite
  var bird = new PIXI.Sprite(PIXI.Texture.fromFrame("bird1.png"));
  bird.anchor.set(0.5);
  app.stage.addChild(bird);

  // bird sprite position
  var birdx = 100;
  var birdy = 100;

  app.ticker.add(function() {
    stars.tilePosition.x -= 0.1;
    hills1.tilePosition.x -= 0.3;
    hills2.tilePosition.x -= 1;

    bird.x = birdx;
    bird.y = birdy;
  })
}
