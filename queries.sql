-- Group recipe steps -- 

SELECT "recipes"."name",
group_concat("steps"."description") as steps
FROM "recipes"
JOIN "steps"
WHERE "recipes"."id" = "steps"."recipes_id"
GROUP BY "steps"."recipes_id"
;
