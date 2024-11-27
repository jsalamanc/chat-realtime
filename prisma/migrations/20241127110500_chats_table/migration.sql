-- CreateTable
CREATE TABLE "Chats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "typeUser" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
