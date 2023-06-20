import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager) {
    // Inside the array you put the classes of your other seeders, they must be placed in execution order.
    return this.call(em, []);
  }
}
