# York Towers application: AI Automation Engineer

## Goal

Apply to York Towers (Dwelleo, real estate marketplace) for AI Automation Engineer / AI Agent Workflow Architect, with a resume tailored to automation, WhatsApp, CRM and lead management, and an honest answer to the AI agent question.

Posting: https://crm.velents.com/preview/position/ai-automation-engineer-ai-agent-workflow-architect-1?igbTracker=972002735&company=york-towers

## Confirmed facts (from the user, 2026-10-23)

- n8n runs the WhatsApp bots in the production Bond Group CRM.
- OTP codes are sent through the Meta Cloud API.
- Make.com was used on the Da7ee7 Bots project and on the 13+ Telegram bots of the ZagEng IT committee.
- No AI-powered workflow, LLM or agent work in production, so the application states that plainly.
- Two automation workflows deployed end to end.
- Notice period: immediate.

## Approach

1. Bring the canonical sources up to date: `src/data/en/experience.js` and `resume.tex` gain n8n, Meta Cloud API OTP, and the Make.com work.
2. Build a tailored variant `resume-automation.tex`, compiled to `~/Documents/resume-automation.pdf`, so the canonical resume stays general.
3. Fill the Velents screening form from the same facts and show it before submitting.
4. Track the application in Notion once submitted.

## Decisions

- Tailored variant instead of editing the canonical CV. The canonical stays the general one; the variant carries the role-specific summary and ordering. Rejected: editing `resume.tex` in place, which would send an automation-heavy CV to every future application.
- The site and the canonical CV get the new facts too, because they are now stale against confirmed production detail.
- Keep the AI agent gap explicit in the form answer. Rejected: implying agent work through n8n AI nodes or LLM prompts, which the evidence does not support.
- One page. Projects are cut to two and achievements to two lines so the automation content fits.
- The OTP and WhatsApp wording says "Meta WhatsApp Cloud API", which is the reading of "meta cloud api" in a WhatsApp context.

## Milestones

- [x] M1: Sources updated (`experience.js`, `resume.tex`).
- [x] M2: Tailored variant compiled to one page.
- [x] M3: Both PDFs rebuilt and checked.
- [x] M4: Form filled and shown for confirmation.
- [x] M5: Submit after the user confirms.
- [x] M6: Notion rows created and enriched.

## Risks

- The role is AI-agent first. A screener may reject on that alone; the CRM and WhatsApp proof is the only counterweight.
- The tailored variant duplicates the canonical LaTeX. Drift is contained by keeping the variant a copy with only the summary, experience ordering and skills changed.
- Salary expectation in EGP is still unknown and the form requires it. It blocks M5.
- Claiming n8n on the CV while the site stays silent would look inconsistent, hence M1.
