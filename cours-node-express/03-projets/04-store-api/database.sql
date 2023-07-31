CREATE DATABASE store_api;

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  featured BOOLEAN DEFAULT false,
  rating NUMERIC(3, 1) DEFAULT 4.5,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  company VARCHAR(255) NOT NULL CHECK (company IN ('ikea', 'liddy', 'caressa', 'marcos'))
);