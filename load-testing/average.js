import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10m', target: 50 },
    { duration: '30m', target: 50 },
    { duration: '5m', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://localhost:8080/');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
