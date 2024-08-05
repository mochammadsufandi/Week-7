const fs = require('fs/promises');


const loadData= async(file) =>  {
    try {
        const data = await fs.readFile(file, 'utf-8');
        return data
        
    } catch (err) {
        console.log(err);
    }
}

async function writeLog(file) {
    try {
        const data = await loadData(file);
        await fs.writeFile("log.txt", data)

    } catch (err) {
        console.log(err);
    }
}

writeLog('./homework.log')
