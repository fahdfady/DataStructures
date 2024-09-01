import { HashTable } from './hashtable';

const hashTable = new HashTable<string, number>(50);

hashTable.set('cole', 1);
hashTable.set('Kendrick', 2);

console.log(hashTable.get('cole'));
hashTable.print();
hashTable.remove("Kendrick");
hashTable.print()
