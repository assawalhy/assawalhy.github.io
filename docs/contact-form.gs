// Setup:
// 1. Create a Google Sheet. Extensions > Apps Script. Replace Code.gs with this file and save.
// 2. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy and authorize.
// 3. Copy the URL that ends in /exec into contactFormEndpoint in src/data/site.js.
// 4. After editing this script later, use Deploy > Manage deployments > Edit > New version, so the /exec URL stays the same.
// 5. Cloudflare Turnstile: in Project Settings > Script Properties add TURNSTILE_SECRET with the widget's secret key.
//    When the property is set, a submission without a valid Turnstile token is dropped.
// 6. Select "authorize" in the editor toolbar and click Run once, so the sheet, mail and UrlFetch scopes are granted.
//    A web app deployment does not prompt for scopes added after the first authorization.

const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = Session.getEffectiveUser().getEmail();
const LIMITS = { name: 120, email: 200, message: 4000 };

function authorize() {
  sheet_();
  MailApp.getRemainingDailyQuota();
  UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'post', muteHttpExceptions: true });
}

function doGet() {
  return ok_();
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ok_();

  const name = String(p.name || '').trim();
  const email = String(p.email || '').trim();
  const message = String(p.message || '').trim();
  if (!name || !email || !message) return ok_();
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) return ok_();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return ok_();
  if (!turnstilePassed_(p['cf-turnstile-response'])) return ok_();

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow([new Date(), name, email, message, p.lang || '', p.page || '']);
  } finally {
    lock.releaseLock();
  }

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: 'New message from assawalhy.xyz: ' + name,
    body: message + '\n\n' + name + ' <' + email + '>',
  });

  return ok_();
}

function turnstilePassed_(token) {
  const secret = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
  if (!secret) return true;
  if (!token) return false;
  const res = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'post',
    payload: { secret: secret, response: String(token) },
    muteHttpExceptions: true,
  });
  try {
    return JSON.parse(res.getContentText()).success === true;
  } catch (err) {
    return false;
  }
}

function sheet_() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(['Received', 'Name', 'Email', 'Message', 'Lang', 'Page']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function ok_() {
  return ContentService.createTextOutput('ok');
}
