
import { Request, Response } from 'express';
import path from 'path';
const fs = require('fs');

const imageController = {
    async getImage(req, res) {
        const content = req.params.content;
        const type = req.params.type;
        const image = req.params.image;
        const pathImage = path.resolve(__dirname, `../../../images/imgs/${content}/${type}/${image}`);

        if (!fs.existsSync(pathImage)) {
            try {
                fs.mkdirSync(path.dirname(pathImage), { recursive: true });
            } catch (error) {
                console.error('Error creating directory:', error);
                // Puedes manejar el error de creación de directorio de alguna manera específica
                // por ejemplo, enviar una respuesta de error al cliente
                return res.status(500).send('Internal Server Error');
            }
        }

        if (fs.existsSync(pathImage)) {
            res.sendFile(pathImage);
        } else {
            const pathNoImage = path.resolve(__dirname, `../../../images/no-image.png`);
            res.sendFile(pathNoImage);
        }
    }
};

export default imageController;

