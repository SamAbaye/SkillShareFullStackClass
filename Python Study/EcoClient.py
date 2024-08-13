from socket import socket, AF_INET, SOCK_STREAM

eC = socket(AF_INET, SOCK_STREAM)

eC.connect(('localhost', 12346))

while(True):
        print("Enter your message")
        msg = input()
        eC.send(msg.encode("utf-8"))
        data = eC.recv(1024)
        print("Message Recieved")
        print(data.decode("utf-8"))
        if msg == 'q':
                break
eC.close()
print("Socket Closed!")
