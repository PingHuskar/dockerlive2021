cd js
docker compose up --build jsapp

-it interactive terminal
docker exec -it db psql -U postgres
\dt
select * from users;
select * from items;

cd python
docker compose up --build pythonapp