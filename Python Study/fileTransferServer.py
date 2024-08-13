import os
from socket import socket, AF_INET, SOCK_STREAM

save_directory = 'uploaded_files'
if not os.path.exists(save_directory):
    os.makedirs(save_directory)

eS1 = socket(AF_INET, SOCK_STREAM)

eS1.bind(('', 1234))

eS1.listen(3)
file = "../"
while True:
    conn, c_addr = eS1.accept()
    myfile =conn.recv(1024)
    os.path.isfile(myfile)
    size = os.path.getsize(myfile)
    conn.send(str(size).encode('utf-8'))
    
    while True:
        read1 = myfile.read(100)
        conn.send(read1.encode('utf-8'))
        if read1 == 0:
            break
    myfile.close()

conn.close()