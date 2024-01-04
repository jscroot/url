export function getProtocol(){
    return window.location.protocol.slice(0,-1);
}

export function getHost(){
    return window.location.host;
}

export function fullPath(){
    return window.location.pathname;
}

export function getPath(){
    return window.location.pathname.substring(1);
}

export function getQueryString(){
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
}

export function setQueryString(key,value){
    let params = new URLSearchParams(window.location.search);
    params.set(key,value);
    window.location.search=params;
}

export function getHash(){
    return window.location.hash.substring(1);
}

export function setHash(hashvalue){
    window.location.hash=hashvalue;
}

export function redirect(URL){
    window.location.replace(URL);
}

export function onHashChange(runFunctionEvent){
    window.addEventListener('hashchange', (event) => {runFunctionEvent(event)});
}