scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -100
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`sus`, SpriteKind.Player)
tiles.setTilemap(tilemap`nivel1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
mySprite.setVelocity(100, 37)
mySprite.ay = 200
