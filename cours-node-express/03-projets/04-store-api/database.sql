CREATE DATABASE store_api;

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  rating NUMERIC(2, 1) NOT NULL DEFAULT 4.5,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  company VARCHAR(255) NOT NULL CHECK (company IN ('ikea', 'liddy', 'caressa', 'marcos'))
);