import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
