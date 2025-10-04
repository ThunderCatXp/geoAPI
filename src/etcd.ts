import { Etcd3 } from 'etcd3';

// Initialize the etcd client
const etcdClient = new Etcd3 ({
  hosts: process.env.ETCD_URL || "127.0.0.1:2379"
});

export class EtcdTokenManager {
  private readonly prefix = 'tokens/';
  private readonly defaultToken = 'admin';

  private getKey(token: string): string {
    return `${this.prefix}${token}`;
  }

  async validateToken(token: string): Promise<boolean> {
    // Use default token in non-production environment
    if (process.env.PROD === 'false' && token === this.defaultToken) {
      return true;
    }

    try {
      const value = await etcdClient.get(this.getKey(token));
      return value !== null; // Token exists and is valid
    } catch (error) {
      console.error('Error validating token against etcd:', error);
      return false;
    }
  }

  async storeToken(token: string, metadata: any): Promise<void> {
    // Prevent overwriting default token in non-production
    if (process.env.PROD === 'false' && token === this.defaultToken) {
      console.warn('Cannot modify default admin token in non-production environment');
      return;
    }

    try {
      await etcdClient.put(this.getKey(token)).value(JSON.stringify({
        metadata,
        createdAt: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Error storing token in etcd:', error);
      throw error;
    }
  }

  async revokeToken(token: string): Promise<void> {
    // Prevent revoking default token in non-production
    if (process.env.PROD === 'false' && token === this.defaultToken) {
      console.warn('Cannot revoke default admin token in non-production environment');
      return;
    }

    try {
      await etcdClient.delete().key(this.getKey(token));
    } catch (error) {
      console.error('Error revoking token in etcd:', error);
      throw error;
    }
  }

  // Helper method to check if we're using default token
  isUsingDefaultToken(): boolean {
    return process.env.PROD === 'false';
  }

  // Get the default token for client reference
  getDefaultToken(): string | null {
    return this.isUsingDefaultToken() ? this.defaultToken : null;
  }
}
