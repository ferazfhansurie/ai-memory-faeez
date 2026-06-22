// One-time script to generate a Google Ads API OAuth refresh token.
// Uses only Node built-ins (no npm install needed).
// Run:  node get-refresh-token.mjs
// It reads CLIENT_ID / CLIENT_SECRET from the sibling .env, opens Google's
// consent screen, captures the redirect on localhost, and prints a refresh token.

import http from 'node:http';
import https from 'node:https';
import { readFileSync } from 'node:fs';
import { exec } from 'node:child_process';

// --- load .env ---
const env = {};
for (const line of readFileSync(new URL('./.env', import.meta.url), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m && !line.trimStart().startsWith('#')) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GOOGLE_ADS_CLIENT_ID / GOOGLE_ADS_CLIENT_SECRET in .env');
  process.exit(1);
}

const PORT = 8765;
const REDIRECT = `http://localhost:${PORT}/`;
const SCOPE = 'https://www.googleapis.com/auth/adwords';

const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT,
  response_type: 'code',
  scope: SCOPE,
  access_type: 'offline',
  prompt: 'consent',
}).toString();

const server = http.createServer((req, res) => {
  const u = new URL(req.url, REDIRECT);
  const code = u.searchParams.get('code');
  const err = u.searchParams.get('error');
  if (err) {
    res.end('OAuth error: ' + err + ' — check the terminal.');
    console.error('\n❌ OAuth error:', err);
    server.close();
    return;
  }
  if (!code) { res.end('Waiting for OAuth redirect...'); return; }

  const body = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT,
    grant_type: 'authorization_code',
  }).toString();

  const r = https.request('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  }, (resp) => {
    let data = '';
    resp.on('data', (c) => (data += c));
    resp.on('end', () => {
      let j = {};
      try { j = JSON.parse(data); } catch {}
      if (j.refresh_token) {
        console.log('\n==================================================');
        console.log('✅  REFRESH TOKEN (paste this into .env as GOOGLE_ADS_REFRESH_TOKEN):\n');
        console.log(j.refresh_token);
        console.log('\n==================================================\n');
        res.end('Success! Refresh token printed in your terminal. You can close this tab.');
      } else {
        console.error('\n❌ No refresh token returned. Response:\n', data);
        res.end('No refresh token — check the terminal.');
      }
      server.close();
    });
  });
  r.on('error', (e) => { console.error('Token request failed:', e); server.close(); });
  r.write(body);
  r.end();
});

server.listen(PORT, () => {
  console.log('\nIf a browser tab does not open, paste this URL manually:\n');
  console.log(authUrl + '\n');
  // best-effort auto-open on Windows
  exec(`start "" "${authUrl}"`, () => {});
});
