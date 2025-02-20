from flask import Flask, jsonify, send_from_directory
api = Flask(__name__, static_folder="./dist/", static_url_path="/")


@api.route("/", methods=["GET"])
def home():
    return send_from_directory(api.static_folder, "index.html")

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5005, debug=True)