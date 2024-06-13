import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getCity(city: string) {
    const result = await prisma.location.findFirst(
        {
            where: {
                asciiname: city 
            }
        }
    );
    
    // Convert BigInt values to strings before serialization
    const resultWithBigIntToString = convertBigIntToString(result);
    
    await prisma.$disconnect();

    return resultWithBigIntToString;
}

export async function getCityByLocaleName(city: string) {
    const result = await prisma.location.findFirst(
        {
            where: {
                alternatenames: {
                    contains: city
                } 
            }
        }
    );
    const resultWithBigIntToString = convertBigIntToString(result);
    
    await prisma.$disconnect();

    return resultWithBigIntToString;
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