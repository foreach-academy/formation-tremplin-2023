CREATE DATABASE file_upload;

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL
);