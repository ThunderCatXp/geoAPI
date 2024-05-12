-- CreateTable
CREATE TABLE "location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "asciiname" TEXT,
    "alternatenames" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "country_code" TEXT,
    "population" BIGINT,
    "elevation" REAL,
    "dem" BIGINT,
    "timezone" TEXT,
    "modification_date" TEXT
);
