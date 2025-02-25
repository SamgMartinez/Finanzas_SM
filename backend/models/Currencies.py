def create_currencies_table(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Currencies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        code TEXT NOT NULL,
        symbol TEXT NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES Users (id)
    )
''')