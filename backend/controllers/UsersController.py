from werkzeug.security import generate_password_hash

def register_user(cursor, body):
    try:
        print(body)
        hashed_password = generate_password_hash(body['password'])
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (body['name'], body['email'], hashed_password)
        )
        cursor.commit()
    except Exception as e:
        print("### ERROR EN REGISTER_USER ###")
        print(str(e))
        return False
    return True

def get_user_by_id(cursor, user_id):
    try:
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()
        print(user)
        return dict(user)
    except Exception as e:
        print("### ERROR EN GET_USER_BY_ID ###")
        print(str(e))
        return False