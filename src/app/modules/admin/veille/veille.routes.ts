import { Route } from '@angular/router';
import { VeilleComponent } from './veille.component';
import { VeilleArticleComponent } from './components/veille-article/veille-article.component';

export default [
    {
        path     : '',
        component: VeilleComponent
    },
    {
        path     : 'article/:articleId',
        component: VeilleArticleComponent
    }
] as Route[];