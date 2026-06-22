// Run a Google Ads GAQL query (or list accessible accounts).
// Node built-ins only — no npm install.
//
//   node query.mjs                       -> lists accessible customers
//   node query.mjs "SELECT campaign.name, metrics.cost_micros FROM campaign WHERE segments.date DURING LAST_30_DAYS"
//
// Reads credentials from the sibling .env (see .env.example).

import https from 'node:https';
import { readFileSync } from 'node:fs';

const env = {};
for (const line of readFileSync(new URL('./.env', import.meta.url), 'utf8').split('\n')) {
  if (line.trimStart().startsWith('#')) continue;
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const V = env.GOOGLE_ADS_API_VERSION || 'v22';
const need = ['GOOGLE_ADS_CLIENT_ID', 'GOOGLE_ADS_CLIENT_SECRET', 'GOOGLE_ADS_REFRESH_TOKEN', 'GOOGLE_ADS_DEVELOPER_TOKEN'];
for (const k of need) if (!env[k]) { console.error(`Missing ${k} in .env`); process.exit(1); }

function post(host, path, headers, body) {
  return new Promise((resolve, reject) => {
    const req = https.request({ host, path, method: 'POST', headers }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject); req.write(body); req.end();
  });
}
function get(host, path, headers) {
  return new Promise((resolve, reject) => {
    const req = https.request({ host, path, method: 'GET', headers }, (res) => {
      let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject); req.end();
  });
}

const tokenBody = new URLSearchParams({
  client_id: env.GOOGLE_ADS_CLIENT_ID,
  client_secret: env.GOOGLE_ADS_CLIENT_SECRET,
  refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN,
  grant_type: 'refresh_token',
}).toString();

const tok = await post('oauth2.googleapis.com', '/token',
  { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(tokenBody) }, tokenBody);
const accessToken = JSON.parse(tok.body).access_token;
if (!accessToken) { console.error('OAuth failed:', tok.body); process.exit(1); }

const baseHeaders = {
  Authorization: `Bearer ${accessToken}`,
  'developer-token': env.GOOGLE_ADS_DEVELOPER_TOKEN,
};
if (env.GOOGLE_ADS_LOGIN_CUSTOMER_ID) baseHeaders['login-customer-id'] = env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;

const gaql = process.argv[2];
if (!gaql) {
  const r = await get('googleads.googleapis.com', `/${V}/customers:listAccessibleCustomers`, baseHeaders);
  console.log(r.body);
} else {
  const cid = env.GOOGLE_ADS_CUSTOMER_ID;
  if (!cid) { console.error('Set GOOGLE_ADS_CUSTOMER_ID in .env to run queries.'); process.exit(1); }
  const body = JSON.stringify({ query: gaql });
  const r = await post('googleads.googleapis.com', `/${V}/customers/${cid}/googleAds:searchStream`,
    { ...baseHeaders, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }, body);
  console.log(r.body);
}
