import MoleServer from 'dho-rpc/MoleServer';
import TransportServer from './TransportServer';

async function expose(methods) {
    const server = new MoleServer({ transports: [new TransportServer({ worker: self })] });
    server.expose(methods);
    await server.run();
}

export default expose;
