CREATE TABLE player_table (
sofifa_id INT PRIMARY KEY,
short_name VARCHAR NOT NULL,
age INT NOT NULL,
nationality VARCHAR,
overall INT,
club VARCHAR,
value_eur INT NOT NULL,
wage_eur INT NOT NULL,
preferred_foot VARCHAR NOT NULL,
team_position VARCHAR,
height_cm INT,
weight_kg INT,
bmi FLOAT NOT NULL,
height_in FLOAT NOT NULL,
weight_lbs FLOAT NOT NULL
);
