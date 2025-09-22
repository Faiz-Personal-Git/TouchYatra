import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path'
import fs from "fs";
import {fileURLToPath} from 'url'
import { handleError } from "./src/middlewares/index.js";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//#region basic app Middelware
app.use(express.json({limit: "16kb"}));
app.use(cors({origin: "*", credentials: true}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(path.join(__dirname, './public')))
app.use(cookieParser());
//#endregion

//#region Swagger Documentation
const file = fs.readFileSync(path.resolve(__dirname, "./src/swagger.yaml"), "utf8");
const swaggerDocument = YAML.parse(
  file?.replace(
    "- url: ${{server}}",
    `- url: http://localhost:3000/api/v1`
  )
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      docExpansion: "none", // keep all the sections collapsed by default
    },
    customSiteTitle: "Touch Yatra apis docs",
  })
);
//#endregion

//#region Routes
import routes from './src/routes/index.js'

app.use("/api/v1/auth", routes.authRoutes);

//#endregion

//Error Handling MiddleWare
app.use(handleError)

export default app