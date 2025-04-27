import { Article } from '../../veille.types';

export const SOLID_PRINCIPLES_OVERVIEW: Article = {
  id: 'solid-principles-overview',
  title: 'Principes SOLID',
  subtitle: 'Les fondations d’un code modulaire',
  summary: `
    SRP, OCP, LSP, ISP et DIP expliqués simplement,
    pour écrire un code évolutif et testable.`,
  imageUrl: 'https://source.unsplash.com/featured/?solid,code,principles',
  paragraphs: [
    {
      title: 'Pourquoi SOLID ?',
      content: `
        <p>
          Introduits par Robert C. Martin, ces cinq principes forment
          un socle pour maintenir un code <em>low-coupling</em>
          et <em>high-cohesion</em>. Ils visent à réduire la
          complexité et faciliter les évolutions.
        </p>`
    },
    {
      title: 'Single Responsibility Principle (SRP)',
      content: `
        <p>
          Une classe/fonction ne doit avoir qu’une seule raison de
          changer. Exemple concret :
        </p>
        <ul>
          <li>
            <strong>Violation</strong> : <code>OrderService</code>
            qui gère la persistance ET l’envoi d’emails.
          </li>
          <li>
            <strong>Conforme</strong> : extraction en
            <code>OrderRepository</code> & <code>EmailNotifier</code>.
          </li>
        </ul>`
    },
    {
      title: 'Open/Closed Principle (OCP)',
      content: `
        <p>
          Ouvert à l’extension, fermé à la modification : on prévoit
          l’ajout de fonctionnalités via héritage ou DI sans toucher
          au code existant.
        </p>
        <p>
          Dans un de mes micro-services, j’ai créé une interface
          <code>PaymentMethod</code> pour supporter Stripe puis PayPal
          sans changer le cœur du service.
        </p>`
    },
    {
      title: 'Liskov Substitution Principle (LSP)',
      content: `
        <p>
          Tout subtype doit pouvoir remplacer son parent sans
          altérer le comportement.  
          J’ai appris à mes dépens qu’un
          <code>Square extends Rectangle</code> peut casser
          le contrat si l’on change la largeur indépendamment de la hauteur.
        </p>`
    },
    {
      title: 'Interface Segregation Principle (ISP)',
      content: `
        <p>
          Préférer plusieurs interfaces spécialisées plutôt qu’une
          interface « God ».  
          J’ai dû refactorer un
          <code>UserManager</code> qui exposait 12 méthodes en deux
          interfaces <code>UserReader</code> / <code>UserWriter</code>.
        </p>`
    },
    {
      title: 'Dependency Inversion Principle (DIP)',
      content: `
        <p>
          Dépendre d’abstractions, pas de concrétions.  
          Grâce à la DI Angular, j’injecte
          <code>HttpClient</code> ou <code>MockHttpClient</code> en
          tests sans modifier le code métier.
        </p>`
    },
    {
      title: 'Mise en pratique & conseils',
      content: `
        <pre><code class="language-ts">
// Exemple simplifié
interface Formatter { format(data): string; }
interface Persister { save(content): void; }

class PdfFormatter implements Formatter { /* … */ }
class DbPersister implements Persister { /* … */ }

class ReportService {
  constructor(
    private formatter: Formatter,
    private persister: Persister
  ) {}
  generateAndSave(data) {
    const content = this.formatter.format(data);
    this.persister.save(content);
  }
}
        </code></pre>
        <p>
          • Testez vos abstractions isolément.  
          • Documentez vos interfaces.  
          • Refactorez dès que vous ressentez un « God Object ».
        </p>`
    }
  ]
};
