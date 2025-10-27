//% blockGap=8 block="screen capture"
namespace screenCapture {
    //% blockId=screenCaptureCreateCaptureScreenImageSprite 
    //% block="create capture screen image sprite"
    //%  blockSetVariable=myScreenCaptureSprite
    //% weight=100
    export function createCaptureScreenImageSprite(): Sprite {
        const sprite: Sprite = new Sprite(getImage())
        game.currentScene().physicsEngine.addSprite(sprite)
        return sprite
    }
  
   //% weight=99
    //% blockId=screenCaptureCreateCaptureScreenImageSprite160x120 block="capture image data in screen 160 x 120" 
    //% blockAliasFor=screenCapture.createCaptureScreenImageSprite
    export function __captureImageDataInScreen160x120(): Sprite {
        const sprite = new Sprite(getImage())
        game.currentScene().physicsEngine.addSprite(sprite)
        return sprite
    }

    function getImage(): Image {
        let img: Image = image.create(screen.width, screen.height) as ScreenImage
        for (let y = 0; y < screen.height; y++)
            for (let x = 0; x < screen.width; x++) {
                let color = screen.getPixel(x, y)
                img.setPixel(x, y, color) // blits the sprites first position and makes the copied one static
            }
            return img
    }
 
   //% shim=loops:pause blockId=screenCapturePause block="pause %ms"
   /**
    * Needed this function to pause the screen full control to make it working  
    @param ms means the number of milliseconds ordered for the screen paused for
    */
    //% weight=98
    export function pause(ms: number = 0) { }
}
