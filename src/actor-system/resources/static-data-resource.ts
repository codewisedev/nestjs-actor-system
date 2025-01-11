import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class StaticDataResource {
  private readonly logger = new Logger(StaticDataResource.name);
  private dataStore: Record<string, any[]> = {};

  /**
   * Initialize the resource with some default data.
   */
  initialize(): void {
    this.logger.log('Initializing Static Data Resource...');
    this.dataStore = {
      users: [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
      ],
      orders: [
        { id: 101, userId: 1, product: 'Laptop', amount: 1200 },
        { id: 102, userId: 2, product: 'Phone', amount: 800 },
        { id: 103, userId: 3, product: 'Tablet', amount: 600 },
      ],
    };
    this.logger.log('Static Data Resource initialized.');
  }

  /**
   * Retrieve data by collection name.
   */
  getCollection(collectionName: string): any[] {
    const collection = this.dataStore[collectionName];
    if (!collection) {
      this.logger.warn(`Collection "${collectionName}" not found.`);
      return [];
    }
    return collection;
  }

  /**
   * Add a new entry to a collection.
   */
  addToCollection(collectionName: string, entry: any): void {
    if (!this.dataStore[collectionName]) {
      this.dataStore[collectionName] = [];
    }
    this.dataStore[collectionName].push(entry);
    this.logger.log(
      `Added entry to "${collectionName}": ${JSON.stringify(entry)}`,
    );
  }
}
