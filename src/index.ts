import 'dotenv/config';
import 'module-alias/register';
import { app } from './frameworks/express/server';
import appConfig from './frameworks/express/app.config';
import { connectToDb } from './frameworks/mongodb/connection';

async function startServer() {
    await connectToDb(appConfig.dbUri);
    app.listen(appConfig.port, () => console.log('server started'));
}

startServer();
