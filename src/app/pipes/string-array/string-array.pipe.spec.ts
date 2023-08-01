import { StringArrayPipe } from './string-array.pipe';

describe('StringarrayPipe', () => {
  const pipe = new StringArrayPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when transform invoked with default separator', () => {
    it('return stringArray', () => {
      const results = pipe.transform('test,testing1,testing2');
      expect(results).toEqual(['test', 'testing1', 'testing2']);
    });
  });

  describe('when transform invoked with custom separator', () => {
    it('return stringArray', () => {
      const results = pipe.transform('test-testing1-testing2', '-');
      expect(results).toEqual(['test', 'testing1', 'testing2']);
    });
  });
});
