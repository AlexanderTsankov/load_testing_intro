import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Average Load Test
export const averageLoadTest = {
  stages: [
    { duration: '10m', target: 50 },
    { duration: '20m', target: 50 },
    { duration: '10m', target: 0 },
  ],
};

export function averageLoad() {
  const res = http.get(URL);
  validateResponse(res);
}