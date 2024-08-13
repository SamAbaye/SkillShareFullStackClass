from socket import socket, AF_INET, SOCK_STREAM
from ftplib import FTP

eC = socket(AF_INET, SOCK_STREAM)

eC.connect(('localhost', 1234))

print("Enter file name")
file_name = input()

eC.send(file_name.encode('utf-8'))
filename = 'myFile'

while True:
    size = eC.recv(1024)
    with open(filename, 'w') as file:
        file.write(size.decode('utf-8'))
        file.close()
        
conn.close()