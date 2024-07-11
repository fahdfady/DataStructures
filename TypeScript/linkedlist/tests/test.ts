import { LinkedList } from "../SingleLinkedList";

function test(description: string, callback: () => void) {
    try {
        callback();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.error(`❌ ${description}: ${error.message}`);
    }
}

const linkedList = new LinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);

test("Insert Last - should insert data at the end of the list", () => {
    linkedList.insertLast(4);
    if (linkedList.printList() !== "1 -> 2 -> 3 -> 4 -> ") {
        throw new Error("Insert Last test failed");
    }
});

test("Find - should find a node with the given data", () => {
    const node = linkedList.find(2);
    if (node?.data !== 2) {
        throw new Error("Find test failed");
    }
});

test("Delete Node - should delete a node with the given data", () => {
    linkedList.deleteNode(2);
    if (linkedList.printList() !== "1 -> 3 -> 4 -> ") {
        throw new Error("Delete Node test failed");
    }
});

// Add more test cases for other methods as needed