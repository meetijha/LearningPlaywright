# Test Cases: VWO Login App

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Team |
| **Date** | 2026-03-19 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

| Field | Description |
|-------|-------------|
| **TC ID** | TC-001 |
| **Title** | Invalid Login with incorrect email format |
| **Preconditions** | User is on `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter `invalid_email.com` in 'Email address' field<br>2. Enter `password123` in 'Password' field<br>3. Click 'Sign in' button |
| **Expected Result** | Validation error message is displayed indicating an invalid email format. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `invalid_login.spec.ts` |

<br>

| Field | Description |
|-------|-------------|
| **TC ID** | TC-002 |
| **Title** | Invalid Login with empty password |
| **Preconditions** | User is on `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter `validuser@vwo.com` in 'Email address' field<br>2. Leave 'Password' field empty<br>3. Click 'Sign in' button |
| **Expected Result** | Validation error message displayed prompting for password. |
| **Priority** | Medium |
| **Category** | Negative |
| **Spec File** | `invalid_login.spec.ts` |

<br>

| Field | Description |
|-------|-------------|
| **TC ID** | TC-003 |
| **Title** | Invalid Login with Chinese characters in email |
| **Preconditions** | User is on `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter `測試@vwo.com` in 'Email address' field<br>2. Enter `password123` in 'Password' field<br>3. Click 'Sign in' button |
| **Expected Result** | Validation error message is displayed for invalid email format or unregistered user. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `invalid_login.spec.ts` |

<br>

| Field | Description |
|-------|-------------|
| **TC ID** | TC-004 |
| **Title** | Invalid Login with Arabic characters in password |
| **Preconditions** | User is on `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter `validuser@vwo.com` in 'Email address' field<br>2. Enter `كلمةالمرور` in 'Password' field<br>3. Click 'Sign in' button |
| **Expected Result** | Validation error message displayed indicating incorrect credentials. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `invalid_login.spec.ts` |

<br>

| Field | Description |
|-------|-------------|
| **TC ID** | TC-005 |
| **Title** | Invalid Login with valid format but unregistered credentials |
| **Preconditions** | User is on `https://app.vwo.com/#/login` |
| **Steps** | 1. Enter `notregisteredqateam123@vwo.com` in 'Email address' field<br>2. Enter `RandomPass123!` in 'Password' field<br>3. Click 'Sign in' button |
| **Expected Result** | Error message indicating invalid credentials or user does not exist. |
| **Priority** | High |
| **Category** | Smoke |
| **Spec File** | `invalid_login.spec.ts` |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 4 |
| Medium | 1 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 0 |
| Functional | 0 |
| Negative | 5 |
| **Total** | **5** |
