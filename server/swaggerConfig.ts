import swaggerJsDocs from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Breed API",
            version: "1.0.0",
        },
    },
    apis: ["./src/router/router.ts"],
};

export const swaggerConfig = swaggerJsDocs(swaggerOptions);
