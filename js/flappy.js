// https://github.com/kittykatattack/learningPixi#keyboard
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

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
