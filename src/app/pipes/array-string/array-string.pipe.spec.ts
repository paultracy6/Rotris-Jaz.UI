import { ArrayStringPipe } from './array-string.pipe';

describe('ArrayStringPipe', () => {
  const pipe = new ArrayStringPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('when transform invoked with default separator', () => {
    it('return string', () => {
      const results = pipe.transform(['test', 'testing1', 'testing2']);
      expect(results).toEqual('test,testing1,testing2');
    });
  });

  describe('when transform invoked with custom separator', () => {
    it('return string', () => {
      const results = pipe.transform(['test', 'testing1', 'testing2'], ':');
      expect(results).toEqual('test:testing1:testing2');
    });
  });
});
