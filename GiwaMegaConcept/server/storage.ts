import { products, contacts, type Product, type InsertProduct, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private contacts: Map<number, Contact>;
  private currentProductId: number;
  private currentContactId: number;

  constructor() {
    this.products = new Map();
    this.contacts = new Map();
    this.currentProductId = 1;
    this.currentContactId = 1;

    // Add sample products
    this.addSampleProducts();
  }

  private addSampleProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Premium Cookies",
        description: "Delicious premium cookies made with the finest ingredients",
        category: "Biscuits",
        imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      },
      {
        name: "Solar Panel Kit",
        description: "Complete solar panel kit for renewable energy solutions",
        category: "Renewable Energy",
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      },
      // Add more sample products...
    ];

    sampleProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
