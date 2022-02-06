export const parseMessage = (message, state) => {
    // get roomid
    let [roomid, ...commands] = message.split('\n');

    if (roomid.charAt(0) !== '>') {
        commands = [roomid, ...commands];
        roomid = '';
    } else {
        roomid = roomid.substr(1);
    }

    if (roomid.includes('battle') && message.includes("|player|p1")) {
        const arr = message.split("|")
        const idx = arr.indexOf("p1")
        console.log("FOUND OPPONENT", arr[idx + 1])
        return {
            opponent: arr[idx + 1],
        }
    }

    if (roomid.includes('battle') && message.includes("|player|p2")) {
        const arr = message.split("|")
        const idx = arr.indexOf("p2")
        console.log("FOUND PLAYER", arr[idx + 1])
        return {
            player: arr[idx + 1],
        }
    }

    if (roomid.includes('battle') && message.includes("|win|")) {
        console.log(state.opponent)
        console.log(`|win|${state.opponent}`)
        console.log("OPPONENT WON?", message.includes(`|win|${state.opponent}`))
        console.log("PLAYER RESULT", state.player && message.includes(`|win|${state.player}`) ? "win" : "lose")
        return {
            playerStatus: state.player && message.includes(`|win|${state.player}`) ? "win" : "lose"
        }
    }

    if (!roomid.includes('battle')) {
        console.log('ignoring roomid', roomid);
        return;
    }

    return;
}

export const listenForWinEvents = (playerResultCallback) => {
    let state = {}
    window.addEventListener('message', (event) => {
        console.log('Showdown iframe: receive game message', event.data);

        const { data, dest } = event.data;

        if (dest !== 'webxr') return;

        console.log('Showdown iframe: event filtered by webXR', data);

        state = {...state, ...parseMessage(data, state)};
        if (state.playerStatus) {
            playerResultCallback(state.playerStatus)
        }

    }, false);
}
