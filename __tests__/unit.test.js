// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is a valid phone number', () => {
  expect(isPhoneNumber('111-222-3333')).toBe(true);
});

test('is a valid phone number', () => {
  expect(isPhoneNumber('(111)-222-3333')).toBe(true);
});

test('is an invalid phone number', () => {
  expect(isPhoneNumber('22222222222')).toBe(false);
});

test('is an invalid phone number', () => {
  expect(isPhoneNumber('111-222-333E')).toBe(false);
});

test('is a valid email', () => {
  expect(isEmail('jimmynewtron@gmail.com')).toBe(true);
});

test('is a valid email', () => {
  expect(isEmail('JohnWick4@yahoo.com')).toBe(true);
});

test('is an invalid email', () => {
  expect(isEmail('broken.@com')).toBe(false);
});

test('is an invalid email', () => {
  expect(isEmail('DonnyYen#gmail.com')).toBe(false);
});

test('is a valid strong password', () => {
  expect(isStrongPassword('JohnWick123')).toBe(true);
});

test('is a valid strong password', () => {
  expect(isStrongPassword('Test_password123')).toBe(true);
});

test('is an invalid strong password', () => {
  expect(isStrongPassword('@%$!!@goodPass!')).toBe(false);
});

test('is an invalid strong password', () => {
  expect(isStrongPassword('ThisPasswordWillBeWayTooLong')).toBe(false);
});

test('is a valid date', () => {
  expect(isDate('05/31/2003')).toBe(true);
});

test('is a valid date', () => {
  expect(isDate('5/1/2003')).toBe(true);
});

test('is an invalid date', () => {
  expect(isDate('2005/12/11')).toBe(false);
});

test('is an invalid date', () => {
  expect(isDate('1999-04-12')).toBe(false);
});

test('is a valid hex color', () => {
  expect(isDate('#911')).toBe(true);
});

test('is a valid hex color', () => {
  expect(isDate('#110029')).toBe(true);
});

test('is an invalid hex color', () => {
  expect(isHexColor('#91I')).toBe(false);
});

test('is an invalid hex color', () => {
  expect(isHexColor('#1L0O29')).toBe(false);
});

