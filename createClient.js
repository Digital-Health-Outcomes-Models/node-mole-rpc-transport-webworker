import MoleClientProxified from 'dho-rpc/MoleClientProxified';
import TransportClient from './TransportClient';

function createClient(worker, options = {}) {
    return new MoleClientProxified({
        ...options,
        transport: new TransportClient({ worker })
    });
}

export default createClient;
