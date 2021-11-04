var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","52bef1ec-5b3b-4f9f-88c5-46745177ced0","59fcb6c0-b010-4393-be03-00e74f6ecb4a","95541521-4b20-4911-b8ad-d5a4946ce309","92a51ea3-3b87-4f27-b208-16245a29436d","f9d836e7-1045-44fd-9942-da216ef75adb","ca4b1f77-d2d0-4674-97be-f74bfaa9c98a","209188d9-b4e3-4d18-a951-eea59cf482b0","b6ab3c1d-0c46-460f-8859-d06af92b21cd"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":63,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"T5JbuFbqMwdvS8Uc.zb1Bq61RwTkZF48","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"zfPHPcztB2y8DR3yS8UyIk.2CQVMuVTl","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"SzZVYy2_uwrAdVswIeNu_dVAxMGB71pB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"52bef1ec-5b3b-4f9f-88c5-46745177ced0":{"name":"Bowser","sourceUrl":null,"frameSize":{"x":225,"y":150},"frameCount":2,"looping":true,"frameDelay":30,"version":"J4dS1qihmrv.0ZorcwWwBe2vs9nqdpkx","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":300},"rootRelativePath":"assets/52bef1ec-5b3b-4f9f-88c5-46745177ced0.png"},"59fcb6c0-b010-4393-be03-00e74f6ecb4a":{"name":"Fan","sourceUrl":null,"frameSize":{"x":130,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"kb5fWeHwr9Auymo5LKJsDtIgXt9PSmtO","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":150},"rootRelativePath":"assets/59fcb6c0-b010-4393-be03-00e74f6ecb4a.png"},"95541521-4b20-4911-b8ad-d5a4946ce309":{"name":"Fuego","sourceUrl":null,"frameSize":{"x":125,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"LSw4dHAH69QOVLA26mBa8jg_EeDlXjol","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":125},"rootRelativePath":"assets/95541521-4b20-4911-b8ad-d5a4946ce309.png"},"92a51ea3-3b87-4f27-b208-16245a29436d":{"name":"Castillo","sourceUrl":null,"frameSize":{"x":714,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"glDpgMZjPlbTrdBZxb16uWKSiFtTaFxd","loadedFromSource":true,"saved":true,"sourceSize":{"x":714,"y":400},"rootRelativePath":"assets/92a51ea3-3b87-4f27-b208-16245a29436d.png"},"f9d836e7-1045-44fd-9942-da216ef75adb":{"name":"Castillo2","sourceUrl":null,"frameSize":{"x":714,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ISPPyyRZns04PUCfV16tMC73O27Hzfii","loadedFromSource":true,"saved":true,"sourceSize":{"x":714,"y":400},"rootRelativePath":"assets/f9d836e7-1045-44fd-9942-da216ef75adb.png"},"ca4b1f77-d2d0-4674-97be-f74bfaa9c98a":{"name":"Cosa","sourceUrl":null,"frameSize":{"x":120,"y":144},"frameCount":1,"looping":true,"frameDelay":12,"version":"3IGTApt83b6ad9hQ6JyitKrj9smEprFZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":144},"rootRelativePath":"assets/ca4b1f77-d2d0-4674-97be-f74bfaa9c98a.png"},"209188d9-b4e3-4d18-a951-eea59cf482b0":{"name":"Bandera","sourceUrl":null,"frameSize":{"x":100,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"4H6.0SNE1fygVLCQ2sWcyCpNhEuyeLsu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":125},"rootRelativePath":"assets/209188d9-b4e3-4d18-a951-eea59cf482b0.png"},"b6ab3c1d-0c46-460f-8859-d06af92b21cd":{"name":"mundo","sourceUrl":null,"frameSize":{"x":534,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"jm7enRR6lcd5WZpt7_OavIjKNBud_cag","loadedFromSource":true,"saved":true,"sourceSize":{"x":534,"y":400},"rootRelativePath":"assets/b6ab3c1d-0c46-460f-8859-d06af92b21cd.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("mundo");
var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(35,250,10,10);
enemy1.shapeColor="red";

var enemy10 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,14,200,20);
net.shapeColor="red";

var goal =0;
var death =0;

hero.setAnimation("hero");
hero.scale=.5;
enemy1.setAnimation("Bowser");
enemy1.scale=.4;
enemy10.setAnimation("Fuego");
enemy10.scale=.4;
enemy2.setAnimation("Fan");
enemy2.scale=.3;
enemy3.setAnimation("Cosa");
enemy3.scale=.3;
net.setAnimation("Bandera");
net.scale=.4;

enemy10.setVelocity(-10,0);
enemy2.setVelocity(9,0);
enemy3.setVelocity(-10,0);
https://studio.code.org/projects/gamelab/iu41MADETNQMrGyH01FTGWb0jK-WG846tcvW6d_M0b8

function draw() {
  
//fondo(b);

createEdgeSprites()

  


enemy10.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)||hero.isTouching(enemy10)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/Perder.mp3",false);
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/melodic_win_10.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Goals:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
