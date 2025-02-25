def create_types_transactions_table(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS TypesTransactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        usuario_id INTEGER NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES Users (id)
    )
''')

def create_subtypes_transactions_table(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS SubtypesTransactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type_id INTEGER NOT NULL,
        usuario_id INTEGER NOT NULL,
        FOREIGN KEY (type_id) REFERENCES TypesTransactions (id),
        FOREIGN KEY (usuario_id) REFERENCES Users (id)
    )
''')