# Test Plan: VWO Login App

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-03-19 |
| **Environment** | Production |
| **Browser** | Chromium, Firefox, WebKit |

---

## 1. Introduction

This test plan describes the testing approach for **VWO Login App**. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core functionality works as expected
- Identify defects before production release
- Ensure user flows are complete and error-free
- Validate UI elements and navigation

## 3. Scope

### In Scope
- Testing the core login functionality on https://app.vwo.com.
- Verification of successful login with valid credentials.
- Verification of failed login with invalid credentials.
- Form validation (e.g., empty fields, invalid email format).
- "Remember Me" functionality (if applicable).
- Error message UI validation.

### Out of Scope
- Performance and load testing.
- Security and penetration testing.
- Testing of features inside the dashboard after logging in.
- Signup functionality.

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional testing
- **Browser:** Chromium, Firefox, WebKit
- **Environment:** Production

### Test Levels
- Smoke Testing (critical paths)
- Functional Testing (all features)
- Negative Testing (invalid inputs, error handling)

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com |
| Browser | Chromium, Firefox, WebKit |
| OS | Cross-platform (Node.js) |
| Framework | Playwright v1.58+ |
| Reporter | HTML + JSON |

## 6. Entry Criteria

- Application is deployed and accessible
- Test environment is configured
- Test data is available
- Test cases are reviewed and approved

## 7. Exit Criteria

- All planned test cases executed
- All critical/high priority defects resolved
- Test report generated and reviewed
- No open blockers

## 8. Test Cases Summary

- **TC01:** Verify successful login with correct email and password.
- **TC02:** Verify login failure with valid email and invalid password.
- **TC03:** Verify login failure with invalid email format.
- **TC04:** Verify validation message when submitting empty fields.
- **TC05:** Verify 'Remember Me' checkbox state retention if present.

## 9. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Application downtime | High | Use stable test environment |
| Flaky tests | Medium | Implement proper waits, no retries |
| Environment differences | Medium | Use consistent browser version |

## 10. Schedule

| Phase | Duration |
|-------|----------|
| Test Planning | 1 day |
| Test Case Design | 1 day |
| Test Execution | 1 day |
| Defect Reporting | Ongoing |
| Test Closure | 1 day |

## 11. Deliverables

- [x] Test Plan (this document)
- [ ] Test Cases Document
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (Jira tickets)
- [ ] Test Summary Report
