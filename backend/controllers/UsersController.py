from werkzeug.security import generate_password_hash

def register_user(cursor, body):
    try:
        print(body)
        hashed_password = generate_password_hash(body['password'])
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (body['name'], body['email'], hashed_password)
        )
    except Exception as e:
        print("### ERROR EN REGISTER_USER ###")
        print(str(e))
        return False
    return True