import http from "k6/http";
import { check, sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    maxRedirects: 0,
    vus: 10,
    duration: '5s',
    noConnectionReuse: false
};

export default () => {
    let response =  http.get("https://localhost:7023/weather");
    check(response, {
        'is status 200' : (r) => r.status === 200
    });
}