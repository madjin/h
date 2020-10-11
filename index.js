ws = new WebSocket('wss://https-mystifying--artificer-reticulum-io.proxy.exokit.org/socket/websocket?vsn=2.0.0');
ws.onopen = () => {
  console.log('open');
  ws.send(JSON.stringify(["1","1","ret","phx_join",{"hub_id":"UZ7NA7m"}]));
};
ws.onerror = err => {
  console.warn('error', err);
};
ws.addEventListener('message', e => {
  const [a,b,c,d,{response}] = JSON.parse(e.data);
  const {session_id,vapid_public_key} = response;
  console.log({session_id, vapid_public_key});
  ws.send(JSON.stringify(["2","2","hub:UZ7NA7m","phx_join",{"profile":{"avatarId":"t3fZiJ5","displayName":"Long-Tailed-14127"},"push_subscription_endpoint":null,"auth_token":null,"perms_token":null,"context":{"mobile":false,"embed":false},"hub_invite_id":null}]));
  ws.addEventListener('message', e => {
    const [a,b,c,d,{response:{hubs:[hub]}}] = JSON.parse(e.data);
    const {host, port, scene: {model_url}, slug} = hub;
    console.log('got model url', model_url);
  }, {once: true});
}, {once: true});
1