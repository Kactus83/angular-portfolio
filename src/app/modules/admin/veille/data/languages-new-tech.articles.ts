import { Article } from '../veille.types';
import { NESTJS_INTRO } from './languages-new-tech/nestjs-intro.article';
import { RUST_VS_GO } from './languages-new-tech/rust-vs-go.article';
import { WH_CPP_ADVISORY } from './languages-new-tech/wh-cpp-advisory.article';

export const LANG_NEW_TECH_ARTICLES: Article[] = [
  RUST_VS_GO,
  NESTJS_INTRO,
  WH_CPP_ADVISORY
];
