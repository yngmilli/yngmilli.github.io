$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(500, 300, 200, 20);
createPlatform(250, 700, 250, 100);
createPlatform(300, 200, 200, 20);
createPlatform(600, 600, 200, 20);
createPlatform(800, 500, 200, 20);
createPlatform(900, 400, 150, 20);
createPlatform(1000, 300, 20, 100);
createPlatform(1000, 200, 20, 100);
createPlatform(1000, 100, 20, 100);
createPlatform(1300, 400, 100, 20);
createPlatform(0, 400, 20, 10);
createPlatform(1000, 500, 50, 500);
createPlatform(1050, 520, 150, 20);
createPlatform(1260, 610, 100, 1);
createPlatform(1260, 610, 1, 1000);

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("kennedi", 1370, 350);
    createCollectable("database", 0, 300);
    createCollectable("database", 1260, 700, 0, 0);
    createCollectable("database", 1020, 370, 0, 0);
    createCollectable("kennedi", 950,450, 0.5 ,1);
    createCollectable("grace", 1050, 700);
    createCollectable("max", 990, 80);
    createCollectable("steve", 300, 80);
    createCollectable("database", 960,700)

  



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 60, 1000);
    createCannon("top", 1250, 1000);
    createCannon("left", 400, 2000 );


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
