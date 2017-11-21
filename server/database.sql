CREATE TABLE shoes (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80),
	cost INTEGER
);

SELECT * FROM shoes;

INSERT INTO shoes (name, cost)
VALUES ('Red Wing', 250),
('Puma Soliel V2', 40),
('Space Boots', 10);

