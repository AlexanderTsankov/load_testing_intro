import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://http://localhost:8080/';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// Spike Test
export const spikeTest = {
  stages: [
    { duration: '1m', target: 0 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 0 },
  ],
};

export function spike() {
  const res = http.get(URL);
  validateResponse(res);
}