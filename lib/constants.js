"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackQueueName = callbackQueueName;
exports.scriptPath = scriptPath;
exports.trackerConstructorName = trackerConstructorName;
exports.trackerInstanceName = trackerInstanceName;
exports.trackerVersionName = trackerVersionName;
exports.accountListName = void 0;

/* eslint-disable curly */
var accountListName = 'yandex_metrika_accounts';
exports.accountListName = accountListName;

function invalidVersion() {
  throw new Error('invalid Ya.Metrika version');
}

function callbackQueueName(version) {
  if (version === '1') return 'yandex_metrika_callbacks';
  if (version === '2') return 'yandex_metrika_callbacks2';
  invalidVersion();
}

function scriptPath(version) {
  if (version === '1') return 'https://mc.yandex.com/metrika/watch.js';
  if (version === '2') return 'https://mc.yandex.com/metrika/tag.js';
  invalidVersion();
}

function trackerConstructorName(version) {
  if (version === '1') return 'Metrika';
  if (version === '2') return 'Metrika2';
  invalidVersion();
}

function trackerInstanceName(id) {
  return "yaCounter".concat(id);
}

function trackerVersionName(id) {
  return "yaCounterVersion".concat(id);
}