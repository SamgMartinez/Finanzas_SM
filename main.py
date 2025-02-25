import sqlite3
from flask import Flask, jsonify, send_from_directory, request, g
from backend.ConfigurationBD import configure_database
from backend.controllers.UsersController import register_user, get_user_by_id

api = Flask(__name__, static_folder="./dist/", static_url_path="/")

DATABASE = 'FinanzasSM.db'

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row
    return g.db

@api.teardown_appcontext
def close_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()

# Creación de la tabla de transacciones
with api.app_context():
    db = get_db()
    cursor = db.cursor()
    configure_database(cursor)
    db.commit()

@api.route("/", methods=["GET"])
def home():
    return send_from_directory(api.static_folder, "index.html")

# Endpoint for user registration
@api.route("/api/users/register", methods=["POST"])
def route_register():
    try:
        if not request.is_json:
            return jsonify({"error": "Invalid JSON"}), 400
        body = request.json
        db = get_db()
        cursor = db.cursor()
        success = register_user(cursor, body)
        if success:
            return jsonify({"message": "User registered successfully"}), 200
        else:
            return jsonify({"message": "User registration failed"}), 400
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route("/api/users/<int:user_id>", methods=["GET"])
def route_get_users(user_id):
    try:
        db = get_db()
        cursor = db.cursor()
        user = get_user_by_id(cursor, user_id)
        if user:
            return jsonify({"user": user}), 200
        else:
            return jsonify({"message": "User not found"}),
    except Exception as e:
        print ("### ERROR EN ROUTE_GET_USERS ###")
        print(str(e))
        return jsonify({"message": str(e)}), 500


if __name__ == "__main__":
    print("Starting Flask server...")
    api.run(host="0.0.0.0", port=5005, debug=True)
