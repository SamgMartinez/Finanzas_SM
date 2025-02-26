from werkzeug.security import generate_password_hash, check_password_hash

def register_user(cursor, body):
    try:
        # Check if user already exists
        cursor.execute("SELECT * FROM users WHERE email = ?", (body['email'],))
        existing_user = cursor.fetchone()
        if existing_user:
            print("### USER ALREADY EXISTS ###")
            return False
        
        print(body)
        hashed_password = generate_password_hash(body['password'])
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (body['name'], body['email'], hashed_password)
        )
        db = cursor.connection
        db.commit()
    except Exception as e:
        print("### ERROR EN REGISTER_USER ###")
        print(str(e))
        return False
    return True

def get_user_by_id(cursor, user_id):
    try:
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()
        return dict(user)
    except Exception as e:
        print("### ERROR EN GET_USER_BY_ID ###")
        print(str(e))
        return False

def validate_login(cursor, body):
    try:
        cursor.execute("SELECT * FROM users WHERE email = ?", (body['email'],))
        user = cursor.fetchone()
        print(body)
        print(user['name'])
        print(check_password_hash(user['password'], body['password']))
        if user and check_password_hash(user['password'], body['password']):
            user_dict = dict(user)
            user_dict.pop('password', None)
            return user_dict
        else:
            return False
    except Exception as e:
        print("### ERROR EN VALIDATE_LOGIN ###")
        print(str(e))
        return False