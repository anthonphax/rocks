import { io, Socket } from 'socket.io-client'

export default class SocketService {
    private static instance: SocketService;

    connection?: Socket

    private constructor() { }

    static getInstance(): SocketService {
        if (!SocketService.getInstance()) {
            this.instance = new SocketService()
        }

        return this.instance
    }

    async connect() {
        this.connection = io(String(process.env.SOCKET_URL))
    }
}