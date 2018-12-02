// setup file
import { configure } from 'enzyme';
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue('foo'),
  removeItem: jest.fn()
};

configure({ adapter: new Adapter() });
