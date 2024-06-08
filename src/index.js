import app from "./app.js";
import sequelize from "./database/database.js";


async function main(){
    try {
        await sequelize.sync();
        console.log('working very well')
        app.listen(3000);
    } catch (error) {
        console.error('No working');
    }
}

main();
