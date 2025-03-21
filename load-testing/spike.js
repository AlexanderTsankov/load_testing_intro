import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '10s', target: 1000 },
    { duration: '1m', target: 10 },
  ],
};

export default function () {
  let res = http.get('https://localhost:8080/');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
