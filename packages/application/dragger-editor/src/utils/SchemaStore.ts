const SchemaStore = ((): {
  add: (name: string, schema: object) => void;
  find: (name: string) => { type?: string, properties?: object } | undefined;
  remove: (name: string) => void;
  clear: () => void;
  print: () => void;
} => {
  
  let store: Record<string, { type?: string, properties?: object }> = {}

  function find(name: string) {
    return store[name]
  }

  function add(name: string, schema: object) {
    if(!name) {
      return;
    }
    store[name] = schema;
  }

  function remove( name: string ) {
    delete store[name];
  }

  function clear() {
    store = {}
  }

  function print() {
    console.log('SchemaStore: ', store, arguments);
  }

  return {
    add,
    remove,
    find,
    clear,
    print
  }
})();


export default SchemaStore;