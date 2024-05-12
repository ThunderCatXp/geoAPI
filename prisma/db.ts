import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import CircularJSON from 'circular-json'
/*
async function main() {
    
    const result = await prisma.location.findFirst(
        {
            where: {
                city: "Herat"
            }
        }
    )
    console.log(result)

    
    
}
*/



/*
main().catch(e=> {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})
*/


export async function getCity(city: string) {
    const result = await prisma.location.findFirst(
        {
            where: {
                name: city 
            }
        }
    );
    
    // Convert BigInt values to strings before serialization
    const resultWithBigIntToString = convertBigIntToString(result);
    
    await prisma.$disconnect();

    return CircularJSON.stringify(resultWithBigIntToString);
}

function convertBigIntToString(obj: any): any {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'bigint') {
                obj[key] = obj[key].toString();
            } else if (typeof obj[key] === 'object') {
                obj[key] = convertBigIntToString(obj[key]);
            }
        }
    }
    return obj;
}