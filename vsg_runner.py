# ~/VHDLFormatter/vsg_runner.py

import vsg

import subprocess
import os
import sys

def main():
    # Ottieni il percorso assoluto del comando `vsg`
    vsg_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '.venv', 'bin', 'vsg'))
    
    # Cattura gli argomenti passati a vsg_runner.py e passali a vsg
    args = sys.argv[1:]  # Ignora il primo argomento che è il nome dello script
    
    # Esegui il comando `vsg` con gli argomenti
    subprocess.run([vsg_path] + args)

if __name__ == "__main__":
    main()

