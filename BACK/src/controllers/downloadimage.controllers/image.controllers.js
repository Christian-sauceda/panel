
import { Request, Response } from 'express';
import path from 'path';
const fs = require('fs');

const imageController = {
    async getImage(req, res) {
        const content = req.params.content;
        const type = req.params.type;
        const image = req.params.image;
        const pathImage = path.resolve(__dirname, `../../imgs/${content}/${type}/${image}`);
        //imgs\moviesadult\back\MOVIE XXXback.jpg
        if (await fs.existsSync(pathImage)) {
            res.sendFile(pathImage);
        } else {
            const pathNoImage = path.resolve(__dirname, `../../imgs/no-image.jpg`);
            res.sendFile(pathNoImage);
        }
    }
}

export default imageController;

