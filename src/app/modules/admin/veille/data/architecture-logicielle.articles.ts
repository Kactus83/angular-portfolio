import { Article } from '../veille.types';
import { CLEAN_ARCHITECTURE_BOOK } from './architecture-logicielle/clean-architecture-book.article';
import { DESIGN_PATTERNS_GUIDE }  from './architecture-logicielle/design-patterns-guide.article';
import { EXPRESS_TO_NESTJS }      from './architecture-logicielle/express-to-nestjs.article';

export const ARCHITECTURE_ARTICLES: Article[] = [
  CLEAN_ARCHITECTURE_BOOK,
  DESIGN_PATTERNS_GUIDE,
  EXPRESS_TO_NESTJS
];
