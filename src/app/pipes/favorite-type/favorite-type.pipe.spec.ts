import { FavoriteType } from 'src/app/enums/favorite-type.enum';
import { FavoriteTypePipe } from './favorite-type.pipe';

describe('FavoriteTypePipe', () => {
  const pipe = new FavoriteTypePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('When Transform is called', () => {
    it('should return favorite type as a string value', () => {
      const actual = pipe.transform(FavoriteType.TestCase);
      expect(actual).toEqual('test case');
    });
  });
});

