const { Image } = require('image-js');

execute().catch(console.error);

async function execute() {
    let image = await Image.load('images/me.jpg');

    let resized = image.resize({width: 50, height: 50});

    return resized.save('images/resized-me.jpg');
}
