import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1h', target: 100 },
    { duration: '2h', target: 100 },
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
