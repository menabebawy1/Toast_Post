CREATE DATABASE LensCleanse;
 \l --> now we can see it
 \c LensCleanse --> to go into the database
CREATE TABLE lensdata(
	post_id SERIAL PRIMARY KEY,
	url text
);
\dt --> you'll see that you created the table




-- 1 follow the steps above
-- 2 change the table name in db.js
-- 3 change queries and variables in index.js client
-- 4 ListTodos
-- 5 EditTodos
