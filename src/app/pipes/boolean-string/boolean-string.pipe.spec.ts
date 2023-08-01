import { BooleanStringPipe } from './boolean-string.pipe';

describe('BooleanStringPipe', () => {
  const pipe = new BooleanStringPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when transform invoked with string type and no value', () => {
    it('should return empty string', () => {
      const results = pipe.transform('');
      expect(results).toEqual('');
    });
  });

  describe('when transform invoked with string type and with value TRUE', () => {
    it('should return TRUE', () => {
      const results = pipe.transform('TRUE');
      expect(results).toEqual('TRUE');
    });
  });

  describe('when transform invoked with string type and with value FALSE', () => {
    it('should return FALSE', () => {
      const results = pipe.transform('FALSE');
      expect(results).toEqual('FALSE');
    });
  });

  describe('when transform invoked with type boolean and with value TRUE', () => {
    it('should return TRUE string', () => {
      const results = pipe.transform(Boolean(true));
      expect(results).toEqual('TRUE');
    });
  });

  describe('when transform invoked with type boolean and with value FALSE', () => {
    it('should return FALSE string', () => {
      const results = pipe.transform(Boolean(false));
      expect(results).toEqual('FALSE');
    });
  });

  describe('when transform invoked with LowerCase to UpperCase conversion', () => {
    it('should return TRUE', () => {
      const results = pipe.transform('true');
      expect(results).toEqual('TRUE');
    });
  });

  describe('when transform invoked with LowerCase to UpperCase conversion', () => {
    it('should return FALSE', () => {
      const results = pipe.transform('false');
      expect(results).toEqual('FALSE');
    });
  });

  describe('when transform invoked with type string', () => {
    it('should return string', () => {
      const results = pipe.transform('test');
      expect(results).toEqual('test');
    });
  });
});
