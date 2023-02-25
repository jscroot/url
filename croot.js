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
    return window.location.hash;
}

export function setHash(hashvalue){
    window.location.hash=hashvalue;
}
