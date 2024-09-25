"use strict";
// import { HashTable } from './hashtable';
Object.defineProperty(exports, "__esModule", { value: true });
// const hashTable = new HashTable<string, number>(50);
// hashTable.set('cole', 1);
// hashTable.set('Kendrick', 2);
// console.log(hashTable.get('cole'));
// hashTable.print();
// hashTable.remove("Kendrick");
// hashTable.print()
var cahinedhashtable_1 = require("./cahinedhashtable");
var hashTable = new cahinedhashtable_1.ChainedHashTable();
// hashTable.add(1, 'cole',);
// hashTable.add(1, 'Kendrick',);
// hashTable.print();
// console.log("===========================")
// hashTable.remove(1, 'cole');
// hashTable.print();
// console.log("===========================")
// hashTable.add(1, 'PES 2013',);
// hashTable.print();
// console.log("===========================")
// hashTable.removeBucket(1)
// hashTable.print();
console.log("===========================");
// Seeded hash table
var seededHashTable = new cahinedhashtable_1.ChainedHashTable();
// Adding multiple entries to create varied bucket sizes
seededHashTable.add(1, 'Item 1'); // Bucket A (Hash 1)
seededHashTable.add(2, 'Item 2'); // Bucket B (Hash 2)
seededHashTable.add(3, 'Item 3'); // Bucket C (Hash 3)
seededHashTable.add(4, 'Item 4'); // Bucket D (Hash 4)
seededHashTable.add(5, 'Item 5'); // Bucket E (Hash 5)
seededHashTable.add(6, 'Item 6'); // Bucket F (Hash 6)
seededHashTable.add(1, 'Item 1a'); // Bucket A (Hash 1, collision with Item 1)
seededHashTable.add(3, 'Item 3a'); // Bucket C (Hash 3, collision with Item 3)
seededHashTable.add(5, 'Item 5a'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.add(5, 'Item 5b'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.add(5, 'Item 5c'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.add(5, 'Item 5d'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.add(5, 'Item 5e'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.add(5, 'Item 5f'); // Bucket E (Hash 5, collision with Item 5)
seededHashTable.print();
