# VWO Login Page Test Plan

## Application Overview

This test plan covers the basic login scenarios for the app.vwo.com login page. It includes positive and negative test cases, validation, and error handling to ensure robust authentication functionality.

## Test Scenarios

### 1. Login Page Scenarios

**Seed:** `Playwright_AI_Agents/web_vwo/seed.spec.js`

#### 1.1. Successful Login with Valid Credentials

**File:** `specs/login/happy_path.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed with username/email and password fields, and a login button.
  2. Enter a valid username/email.
    - expect: Username/email is accepted.
  3. Enter a valid password.
    - expect: Password is accepted.
  4. Click the login button.
    - expect: User is redirected to the dashboard or home page.

#### 1.2. Login with Invalid Password

**File:** `specs/login/invalid_password.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Enter a valid username/email.
    - expect: Username/email is accepted.
  3. Enter an invalid password.
    - expect: Password is accepted.
  4. Click the login button.
    - expect: An error message is displayed indicating invalid credentials.

#### 1.3. Login with Invalid Username/Email

**File:** `specs/login/invalid_username.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Enter an invalid username/email.
    - expect: Username/email is accepted.
  3. Enter a valid password.
    - expect: Password is accepted.
  4. Click the login button.
    - expect: An error message is displayed indicating invalid credentials.

#### 1.4. Login with Empty Fields

**File:** `specs/login/empty_fields.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Leave both username/email and password fields empty.
    - expect: Fields are empty.
  3. Click the login button.
    - expect: Validation messages are shown for required fields.

#### 1.5. Login with Empty Password

**File:** `specs/login/empty_password.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Enter a valid username/email.
    - expect: Username/email is accepted.
  3. Leave the password field empty.
    - expect: Password field is empty.
  4. Click the login button.
    - expect: Validation message is shown for the password field.

#### 1.6. Login with Empty Username/Email

**File:** `specs/login/empty_username.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Leave the username/email field empty.
    - expect: Username/email field is empty.
  3. Enter a valid password.
    - expect: Password is accepted.
  4. Click the login button.
    - expect: Validation message is shown for the username/email field.

#### 1.7. Password Masking Verification

**File:** `specs/login/password_masking.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Enter any password in the password field.
    - expect: Password is masked (not visible as plain text).

#### 1.8. Forgot Password Link Functionality

**File:** `specs/login/forgot_password_link.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/
    - expect: Login page is displayed.
  2. Click the 'Forgot Password?' link.
    - expect: User is redirected to the password recovery page or modal.
