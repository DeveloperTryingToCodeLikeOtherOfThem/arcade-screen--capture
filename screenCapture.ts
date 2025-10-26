
namespace screenCapture {
    export function captureImageDataInScreen160x120(): Image {
        let img: Image = image.create(screen.width, screen.height) as ScreenImage

        for (let y = 0; y < screen.height; y++)
            for (let x = 0; x < screen.width; x++) {
                let color = screen.getPixel(x, y)
                img.setPixel(x, y, color) // blits the sprites first position and makes the copied one static
                scene.centerCameraAt(x, y)
            }

        return img
    }
}
