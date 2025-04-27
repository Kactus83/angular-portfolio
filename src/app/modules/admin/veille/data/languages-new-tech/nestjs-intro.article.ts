import { Article } from '../../veille.types';

export const NESTJS_INTRO: Article = {
  id: 'nestjs-intro',
  title: 'Découverte de NestJS',
  subtitle: 'Un backend modulaire et typé pour Node.js',
  summary: `
    Comment NestJS a structuré et enrichi mes microservices Express existants
    grâce à son écosystème complet.`,
  imageUrl: 'https://source.unsplash.com/featured/?nestjs,nodejs,backend',
  paragraphs: [
    {
      title: 'Mon point de départ',
      content: `
        <p>
          Je venais d’un template de microservices construit sous Express
          avec Passport, Prisma et Swagger manuels. Malgré une architecture
          modulaire, chaque ajout de fonctionnalité générait beaucoup de
          code “glue” (routing, injection de dépendances, doc).
        </p>`
    },
    {
      title: 'Modules, Contrôleurs et Providers',
      content: `
        <p>
          NestJS impose une structure claire :
        </p>
        <ul>
          <li><strong>Module</strong> (<code>@Module</code>) regroupe routes, services et imports.</li>
          <li><strong>Controller</strong> (<code>@Controller</code>) gère les endpoints.</li>
          <li><strong>Provider</strong> (<code>@Injectable</code>) pour les services métier injectables.</li>
        </ul>`
    },
    {
      title: 'Swagger, Prisma & Passport intégrés',
      content: `
        <p>
          Avec <code>@nestjs/swagger</code>, la doc OpenAPI se génère
          automatiquement à partir des décorateurs. Prisma s’intègre
          via <code>prisma-nestjs-graphql</code>, et Passport est “plug-and-play”
          grâce au <code>@nestjs/passport</code>.
        </p>`
    },
    {
      title: 'Avantages clés',
      content: `
        <ul>
          <li>❯ <strong>DI native</strong> : pas de boilerplate, la
          hiérarchie est gérée par le framework.</li>
          <li>❯ <strong>Pipes & Guards</strong> pour validation et
          autorisation dès la déclaration.</li>
          <li>❯ <strong>WebSockets & Microservices</strong> (RabbitMQ,
          Kafka…) en quelques lignes.</li>
          <li>❯ <strong>Tests facilité</strong> : modules de test et
          mocks injectables.</li>
        </ul>`
    },
    {
      title: 'Illustration rapide',
      content: `
        <pre><code class="language-ts">
// users.module.ts
@Module({
  imports: [PrismaModule, PassportModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// users.controller.ts
@Controller('users')
export class UsersController {
  constructor(private svc: UsersService) {}
  @Get() findAll() { return this.svc.findAll(); }
}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.user.findMany(); }
}
        </code></pre>`
    },
    {
      title: 'Bilan',
      content: `
        <p>
          Migrer vers NestJS a réduit de 40 % le code “plomberie” de mes
          services, augmenté la cohérence d’équipe et généré une
          documentation toujours à jour. Chaque nouveau module se branche
          en un clic, sans craindre les conflits de structure.
        </p>`
    }
  ]
};
