import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/images");
    },
    filename: (req, file, cb) => {
        console.log(file, "file");
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const uploadImage = multer({storage, fileFilter: filefilter});
