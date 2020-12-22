import { Validators } from '@angular/forms';
import { matchingPasswords } from '../services/auth-form.service';

export const SIGN_UP_FORM = {
  firstName: {
    validators: [Validators.required],
    value: ''
  },
  lastName: {
    validators: [Validators.required],
    value: ''
  },
  email: {
    validators: [Validators.required, Validators.email],
    value: ''
  },
  password: {
    validators: [Validators.required, Validators.minLength(6)],
    value: ''
  },
  confirmPassword: {
    validators: [Validators.required],
    value: ''
  },
  role: {
    validators: [Validators.required],
    value: ''
  }
};

export const FORM_TYPES = {
  SIGNUPFORM: 'SIGN_UP_FORM'
};

export const ROLES = [
  'FE',
  'BE',
  'UI',
  'UX',
  'BA',
  'QA',
  'PM'
];
