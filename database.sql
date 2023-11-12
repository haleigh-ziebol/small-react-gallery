CREATE TABLE "gallery-items" (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(300),
	"description" varchar(300),
    	"likes" integer
);

INSERT INTO "gallery-items" ("path", "description", "likes") 
VALUES ('images/puffball.jpg', 'Photo of a puffball mushroom.', 0 ), ('images/amanita-white.jpg', 'Photo of a white amanita mushroom.', 0 ),
    ('images/amanita-yellow.jpg', 'Photo of a yellow amanita mushroom.', 0 ), ('images/white.jpg', 'Photo of a white mushroom with a volva.', 0 ),
    ('images/old-man.jpg', 'Photo of an old man of the woods mushroom.', 0 ), ('images/orangepeel.jpg', 'Photo of an orange peel fungus.', 0 );
