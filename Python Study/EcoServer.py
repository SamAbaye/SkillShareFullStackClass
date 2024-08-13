from socket import socket, AF_INET, SOCK_STREAM
from threading import Thread
def worker(conn, addr):
    while True:
        data = conn.recv(1024)
        print(data.decode("utf-8"))
        conn.send(data)
        if data.decode('utf-8') == 'q':
            break
    conn.close()
eS = socket(AF_INET, SOCK_STREAM)

eS.bind(('', 12346))

eS.listen(3)

while True:
    conn, c_addr = eS.accept()
    th = Thread(target=worker, args=(conn, c_addr))
    th.start()

eS.close()