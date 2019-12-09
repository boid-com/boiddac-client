export function setNodeInfo (state, payload) {
  state.nodeInfo = payload
}
export function setScatter (state, payload) {
  state.scatter = payload
}

export function setDacApi (state, payload) {
  state.eosApi = payload
}

export function setEosScatter (state, payload) {
  state.eosScatter = payload
}

export function setActiveNetwork (state, payload) {
  state.active_network = payload
}

export function setChainId (state, payload) {
  state.chainId = payload
}

export function setDapp_version (state, payload) {
  state.dapp_version = payload
}
export function setLocal_storage_version (state, payload) {
  state.local_storage_version = payload
}

export function setNode (state, nodeurl) {
  const [protocol, host, port] = nodeurl.split(':')

  const parts = {
    protocol: protocol,
    host: host.replace(/\//g, ''),
    port: port || (protocol === 'https' ? '443' : '80')
  }

  // set new node to the active network
  const n = state.networks.find(n => n.name == state.active_network)
  Object.assign(n, parts)

  // delete our apis
  state.eosApi = state.eosScatter = null
}
