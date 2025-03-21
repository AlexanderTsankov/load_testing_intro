import http from 'k6/http';
import { check, sleep } from 'k6';

const URL = 'https://test.k6.io';

function validateResponse(res) {
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(Math.random() * 2);
}

// 1. Smoke Test
export const smokeTest = {
  stages: [
    { duration: '1m', target: 5 },
  ],
};

export function smoke() {
  const res = http.get(URL);
  validateResponse(res);
}

// 2. Average Load Test
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

// 3. Stress Test
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

// 4. Spike Test
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

// 5. Breakpoint Test
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

// 6. Soak Test
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
