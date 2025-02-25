from backend.models.Users import create_users_table
from backend.models.Currencies import create_currencies_table
from backend.models.Transactions import create_transactions_table
from backend.models.TypesTransactions import create_types_transactions_table, create_subtypes_transactions_table

def configure_database(cursor):
    create_users_table(cursor)
    create_currencies_table(cursor)
    create_transactions_table(cursor)
    create_types_transactions_table(cursor)
    create_subtypes_transactions_table(cursor)