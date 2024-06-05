CREATE SCHEMA IF NOT EXISTS my_bank;

USE my_bank;

CREATE TABLE IF NOT EXISTS accounts (
    account_number INT AUTO_INCREMENT PRIMARY KEY,
    account_type VARCHAR(20) NOT NULL,
    balance INT NOT NULL,
    account_holder VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS movements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_value INT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_number) REFERENCES accounts(account_number) ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO accounts (account_type, balance, account_holder)
VALUES
    ('Savings', 1000, 'John Doe'),
    ('Checking', 500, 'Jane Smith'),
    ('Savings', 1500, 'Alice Johnson'),
    ('Checking', 700, 'Bob Brown'),
    ('Savings', 1200, 'Charlie Davis');


INSERT INTO movements (transaction_value, account_number)
VALUES
    (200, 1),
    (-100, 1),
    (300, 2),
    (-50, 2),
    (400, 3),
    (-200, 3),
    (500, 4),
    (-100, 4),
    (600, 5),
    (-150, 5);

