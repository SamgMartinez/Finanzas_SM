def create_transactions_table(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        amount REAL NOT NULL,
        currency_id INTEGER NOT NULL,
        exchange_rate REAL DEFAULT 1,
        currency_exchange_id INTEGER DEFAULT NULL,
        exchange_rate_AUX REAL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users (id),
        FOREIGN KEY (currency_id) REFERENCES Currencies (id)
    )
''')