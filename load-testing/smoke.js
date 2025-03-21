import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Smoke Test
export const smokeTest = {
  stages: [
    { duration: '1m', target: 5 },
  ],
};

export function smoke() {
  const res = http.get(URL);
  validateResponse(res);
}