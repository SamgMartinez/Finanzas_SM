from flask import Flask, send_from_directory
import webview
import threading
import os
import sys

# Configuración Flask
api = Flask(__name__, static_folder="./dist/", static_url_path="/")

@api.route("/", methods=["GET"])
def home():
    return send_from_directory(api.static_folder, "index.html")

def get_resource_path(relative_path):
    """Obtiene la ruta correcta para recursos cuando se ejecuta como exe"""
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.abspath("."), relative_path)

def start_server():
    """Inicia el servidor Flask en un puerto específico"""
    api.run(host='127.0.0.1', port=5005, debug=False, threaded=True)

if __name__ == "__main__":
    # Inicia el servidor Flask en un hilo separado
    t = threading.Thread(target=start_server)
    t.daemon = True
    t.start()
    
    # Configura la ventana nativa
    webview.create_window(
        title="Finanzas SM", 
        url="http://127.0.0.1:5005",
        width=1000,
        height=800,
        min_size=(800, 600),
        resizable=True,
        text_select=True,
        confirm_close=True
    )
    
    # Inicia la ventana nativa (bloqueante)
    webview.start()