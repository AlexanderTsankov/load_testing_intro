import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Soak Test
export const soakTest = {
  stages: [
    { duration: '2h', target: 50 },
    { duration: '4h', target: 50 },
    { duration: '1h', target: 0 },
  ],
};

export function soak() {
  const res = http.get(URL);
  validateResponse(res);
}