CREATE TABLE "Users" (
	"id"	INTEGER,
	"login"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	"nickname"	TEXT NOT NULL,
	"avatar"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "Games" (
	"id"	INTEGER,
	"title"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "GameInfo" (
	"id"	INTEGER,
	"game_id"	INTEGER,
	"description"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)