import { openDB, deleteDB, wrap, unwrap, IDBPDatabase } from 'idb';

export class Database {
  private db: IDBPDatabase;
  static instance: Database | null;

  static async getInstance(): Promise<Database> {
    if (this.instance == null) {
      this.instance = await this.create();
    }
    return Promise.resolve(this.instance);
  }

  static async create(): Promise<Database> {
    return new Database(
      await openDB('votr', 4, {
        upgrade: (db) => {
          const store = db.createObjectStore('workouts', {
            keyPath: 'id',
            autoIncrement: true,
          });

          store.createIndex('createdAtIndex', 'createdAt');
        },
        blocked: () => {},

      }).catch(err => {
        console.error(err.message);
        throw err;
      })
    );
  }

  constructor(db: IDBPDatabase) {
    this.db = db;
  }

  async allWorkouts(): Promise<any[]> {
    return await this.db.getAllFromIndex('workouts', 'createdAtIndex');
  }

  async addFakeWorkout(): Promise<any> {
    const tx = this.db.transaction('workouts', 'readwrite');
    return await tx.store.add({
      title: 'workout',
      createdAt: new Date(),
    });
  }
}
