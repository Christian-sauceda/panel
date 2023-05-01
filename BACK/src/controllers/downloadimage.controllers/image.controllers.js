
import { Request, Response } from 'express';
import path from 'path';
const fs = require('fs');

const imageController = {
    async getImage(req, res) {
        const content = req.params.content;
        const type = req.params.type;
        const image = req.params.image;
        const pathImage = path.resolve(__dirname, `../../../images/imgs/${content}/${type}/${image}`);

        // Verificar si la imagen existe
        if (fs.existsSync(pathImage)) {
            // Eliminar la imagen existente
            try {
                fs.unlinkSync(pathImage);
            } catch (error) {
                console.error('Error deleting existing image:', error);
                // Puedes manejar el error de eliminación de imagen de alguna manera específica
                // por ejemplo, enviar una respuesta de error al cliente
                return res.status(500).send('Internal Server Error');
            }
        }

        // Crear el directorio si no existe
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

