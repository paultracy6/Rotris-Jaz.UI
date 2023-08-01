import { FavoriteType } from "src/app/enums/favorite-type.enum";

export interface Favorite {
  type: FavoriteType,
  name: string,
  id: number
}
