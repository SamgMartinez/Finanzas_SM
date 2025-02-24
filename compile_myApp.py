import PyInstaller.__main__
import os
import sys

# Definir la ruta a tu carpeta 'dist' de React
current_dir = os.path.dirname(os.path.abspath(__file__))
react_dist = os.path.join(current_dir, 'dist')

# Verificar que exista la carpeta dist
if not os.path.exists(react_dist):
    print("ERROR: No se encuentra la carpeta 'dist' con los archivos React compilados.")
    print(f"Debería estar en: {react_dist}")
    sys.exit(1)

# Determinar el separador correcto según el sistema operativo
separator = ';' if sys.platform == 'win32' else ':'

# Lista de argumentos para PyInstaller
args = [
    'app_escritorio.py',
    '--onefile',
    '--name=FinanzasSM',
    f'--add-data={react_dist}{separator}dist',
    '--noconsole',
]
# Añadir icon solo si existe
icon_path = os.path.join(react_dist, 'favicon.ico')
if os.path.exists(icon_path):
    args.append(f'--icon={icon_path}')

# Ejecutar PyInstaller con los argumentos
print("Iniciando compilación con PyInstaller...")
print(f"Archivo principal: desktop_app.py")
print(f"Incluyendo carpeta React: {react_dist}")

try:
    PyInstaller.__main__.run(args)
    print("\n✅ Compilación exitosa. El ejecutable se encuentra en la carpeta 'dist'.")
except Exception as e:
    print(f"\n❌ Error durante la compilación: {str(e)}")
    print("\nPrueba ejecutar el siguiente comando manualmente:")
    cmd = "pyinstaller " + " ".join(args)
    print(cmd)