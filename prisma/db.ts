import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
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
                city: city 
            }
        }
    )
    await prisma.$disconnect()

    return result
}

