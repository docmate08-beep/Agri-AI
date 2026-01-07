export const syncAll = async (): Promise<void> => {
  console.log('Syncing offline data...');
};

export const offlineWrapper = {
  saveLocally: async (key: string, _data: unknown): Promise<void> => {
    console.log(`Saving ${key} locally`);
  },
  getLocal: async (key: string): Promise<unknown> => {
    console.log(`Getting ${key} from local storage`);
    return null;
  },
  clearLocal: async (): Promise<void> => {
    console.log('Clearing local storage');
  },
};
