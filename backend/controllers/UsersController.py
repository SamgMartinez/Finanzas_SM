from werkzeug.security import generate_password_hash
def register_user(cursor, body):
    try:
        hashed_password = generate_password_hash(body["password"])
        cursor.execute(
            f"INSERT INTO users (username, password, email) VALUES ('{body['username']}', {hashed_password} , '{body['email']}')"
        )
    except Exception as e:
        print(str(e))
        return False
    return True