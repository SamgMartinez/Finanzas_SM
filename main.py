import sqlite3
from flask import Flask, jsonify, send_from_directory, request
from backend.ConfigurationBD import configure_database

api = Flask(__name__, static_folder="./dist/", static_url_path="/")

# Conexión a la base de datos
connection = sqlite3.connect('FinanzasSM.db')
cursor = connection.cursor()

# Creación de la tabla de transacciones
configure_database(cursor)

@api.route("/", methods=["GET"])
def home():
    return send_from_directory(api.static_folder, "index.html")

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5005, debug=True)

#endpoint for user registration
@api.route("/api/users/register", methods=["POST"])
def register():
    try:
        body = request.json
        success = configure_database(cursor, body)
        if success:
            return jsonify({"message": "User registered successfully"}), 200
        else:
            return jsonify({"message": "User registration failed"}), 400
    except Exception as e:
        return jsonify({"message": str(e)}), 500