import { Article } from '../../veille.types';

export const EXPRESS_TO_NESTJS: Article = {
  id: 'express-to-nestjs',
  title: 'Du middleware Express à NestJS',
  subtitle: 'Pourquoi migrer votre API Node ?',
  summary: `
    Explorer les gains de productivité, de testabilité et
    de structure offerts par NestJS par rapport à Express.`,
  imageUrl: 'https://source.unsplash.com/featured/?nestjs,nodejs,framework',
  paragraphs: [
    {
      title: 'Limites d’Express',
      content: `
        <ul>
          <li>
            <strong>Structure libre</strong> : chaque équipe organise
            son projet comme elle l’entend.
          </li>
          <li>
            <strong>DI manuelle</strong> : gestion fastidieuse des
            dépendances, boilerplate important.
          </li>
          <li>
            <strong>Documentation & tests</strong> : à configurer et
            maintenir soi-même (Swagger, Jest, fixtures).
          </li>
        </ul>`
    },
    {
      title: 'NestJS en un coup d’œil',
      content: `
        <ul>
          <li>
            <strong>Modularité</strong> : <code>@Module</code> regroupe
            contrôleurs & providers.
          </li>
          <li>
            <strong>Décorateurs TypeScript</strong> : <code>@Controller</code>,
            <code>@Injectable</code>, <code>@Get</code>, <code>@Post</code>.
          </li>
          <li>
            <strong>DI & lifecycle</strong> : injection transparente
            et hooks <code>OnModuleInit</code>.
          </li>
          <li>
            <strong>Pipes, Guards, Interceptors</strong> : validation,
            sécurité, logging, caching.
          </li>
        </ul>`
    },
    {
      title: 'Petite démo de migration',
      content: `
        <pre><code class="language-ts">
// Avant (Express)
app.get('/items', (req, res) =>
  itemService.findAll().then(items => res.json(items))
);

// Après (NestJS)
@Controller('items')
export class ItemsController {
  constructor(private readonly svc: ItemService) {}

  @Get()
  findAll() {
    return this.svc.findAll();
  }
}
        </code></pre>`
    },
    {
      title: 'Swagger & tests auto-générés',
      content: `
        <p>
          - Ajoutez <code>@nestjs/swagger</code> et un seul appel
            configure : tous vos endpoints apparaissent dans l’UI.<br>
          - Le module <code>TestingModule</code> et <code>supertest</code>
            simplifient la création de vos tests e2e.
        </p>`
    },
    {
      title: 'Productivité & maintenabilité',
      content: `
        <p>
          Après avoir migré mon projet template, le temps pour ajouter
          un nouveau module est passé de 1 h à 15 min. La couverture
          de tests est montée de 70 % à 93 %, et la documentation est
          devenue un by-product, non plus une corvée.
        </p>`
    },
    {
      title: 'À retenir',
      content: `
        <p>
          NestJS impose une discipline modulaire dès le départ :
          structures claires, DI native, hooks pour intercepter
          chaque requête et réponse, et génération automatique
          de docs et tests.
        </p>`
    }
  ]
};
