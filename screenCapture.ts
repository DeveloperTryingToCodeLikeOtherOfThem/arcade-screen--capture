//% blockGap=8 block="screen capture"
namespace screenCapture {
    //% blockId=screenCaptureCreateCaptureScreenImageSprite 
    //% block="create capture screen image sprite"
    //%  blockSetVariable=myScreenCaptureSprite
    //% weight=100
    export function createCaptureScreenImageSprite(): Sprite {
        let img: Image = image.create(screen.width, screen.height) as ScreenImage

        for (let y = 0; y < screen.height; y++)
            for (let x = 0; x < screen.width; x++) {
                let color = screen.getPixel(x, y)
                img.setPixel(x, y, color) // blits the sprites first position and makes the copied one static
                scene.centerCameraAt(x, y)
            }
        
        const sprite: Sprite = new Sprite(img)
        return sprite
    }

   //% weight=99
    //% blockId=screenCaptureCreateCaptureScreenImageSprite block="capture image data in screen 160 x 120" 
    //% blockAliasFor=screenCapture.captureImageDataInScreen160x120
    export function __captureImageDataInScreen160x120(): Sprite {
        let img: Image = image.create(screen.width, screen.height) as ScreenImage
        const sprite = new Sprite(img)

        for (let y = 0; y < screen.height; y++)
            for (let x = 0; x < screen.width; x++) {
                let color = screen.getPixel(x, y)
                img.setPixel(x, y, color) // blits the sprites first position and makes the copied one static
                scene.centerCameraAt(x, y)
            }

        return sprite
    }
}
