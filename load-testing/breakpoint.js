import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Breakpoint Test
export const breakpointTest = {
  stages: [
    { duration: '10m', target: 100 },
    { duration: '5m', target: 300 },
    { duration: '5m', target: 500 },
  ],
};

export function breakpoint() {
  const res = http.get(URL);
  validateResponse(res);
}