import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Stress Test
export const stressTest = {
  stages: [
    { duration: '5m', target: 100 },
    { duration: '10m', target: 200 },
    { duration: '5m', target: 0 },
  ],
};

export function stress() {
  const res = http.get(URL);
  validateResponse(res);
}