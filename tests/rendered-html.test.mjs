import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the insurance quote application", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Auto Insurance Quote \| Desert Shield Insurance/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("includes the Render static build and project social card", async () => {
  const [html, config] = await Promise.all([
    readFile(new URL("../render-dist/index.html", import.meta.url), "utf8"),
    readFile(new URL("../src/config.ts", import.meta.url), "utf8"),
  ]);
  assert.match(html, /Desert Shield Insurance/);
  assert.match(config, /webhookUrl/);
  assert.match(config, /calendarUrl/);
  await readFile(new URL("../render-dist/og.png", import.meta.url));
});
