import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import databaseConfig from './db';

import userRoutes from './routes/user';
import usersRoutes from './routes/users';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: error.message });
});

// Defining API routes
const baseUrl = '/api/v1';

app.use(`${baseUrl}/user`, userRoutes);
app.use(`${baseUrl}/users`, usersRoutes);

// Running the server
databaseConfig.sync()
  .then(() => {
    console.log("Successfully connected to the database");

    const port: number = Number(process.env.PORT) || 8080;
    app.set('port', port);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.log("Error occured while syncing to the database");
    console.log(error);
  });
