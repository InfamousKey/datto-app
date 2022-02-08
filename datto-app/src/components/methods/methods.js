export const fetchApi = async uri => {
    fetch(uri, {'mode': 'no-cors'})
        .then(res => {
            return res;
        })
}
