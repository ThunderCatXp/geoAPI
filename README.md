# Geocoding API

[![Made with TypeScript](https://img.shields.io/badge/Made_with-TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/ "Go to TypeScript homepage")

## Hono + Prisma ORM + SQLite

```bash
npm install
npm run dev
```

## API output example(with formating)

```json
{
   "id":21682,
   "name":"Moscow",
   "asciiname":"Moscow",
   "alternatenames":"MOW,Maeskuy,Maskav,Maskava,Maskva,Mat-xco-va,Matxcova,Matxcơva,Mosca,Moscfa,Moscha,Mosco,Moscou,Moscova,Moscovo,Moscow,Moscoƿ,Moscu,Moscua,Moscòu,Moscó,Moscù,Moscú,Moskva,Moska,Moskau,Mosko,Moskokh,Moskou,Moskov,Moskova,Moskovu,Moskow,Moskowa,Mosku,Moskuas,Moskva,Moskve,Moskvo,Moskvy,Moskwa,Moszkva,Muskav,Musko,Mát-xcơ-va,Mòskwa,Məskeu,Məskəү,masko,maskw,mo si ke,moseukeuba,mosko,mosukuwa,mskw,mwskva,mwskw,mwsqbh,mx s ko,Μόσχα,Мæскуы,Маскав,Масква,Москва,Москве,Москвы,Москова,Москох,Москъва,Мускав,Муско,Мәскеу,Мәскәү,Մոսկվա,מאָסקװע,מאסקווע,מוסקבה,ماسکو,مسکو,موسكو,موسكۋا,ܡܘܣܩܒܐ,मास्को,मॉस्को,মস্কো,மாஸ்கோ,มอสโก,མོ་སི་ཁོ།,მოსკოვი,ሞስኮ,モスクワ,莫斯科,모스크바",
   "latitude":55.75222,
   "longitude":37.61556,
   "country_code":null,
   "population":"10381222",
   "elevation":null,
   "dem":"144",
   "timezone":"Europe/Moscow",
   "modification_date":"2022-12-10"
}
```

`dem` stands for Digital Elevation Model<sup>*</sup>

## Run docker

```bash
docker build -t geoapi .
```

```bash
docker run -p 3000:3000 geoapi
```

## Run nginx load balancer

```bash
docker-compose up -d --build
```

## Future plans

- [x] Make NGINX load balancer
- [x] Have a deploy workflow
- [ ] Working frontend


<img width="867" height="883" alt="diagram-export-08 10 2025-23_11_26" src="https://github.com/user-attachments/assets/9570719d-e54c-4f6c-9799-1dc7619eedd4" />

