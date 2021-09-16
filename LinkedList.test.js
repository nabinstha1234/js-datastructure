const LinkedList = require("./LikedList");

describe('insetathead',()=>{
    test("it add the element to the begining of the list",()=>{
        const list = new LinkedList();
        list.insertAtHead(10);
        const oldHead = list.head;
        list.insertAtHead(20);

        expect(list.head.value).toBe(20);
        expect(list.head.next).toBe(oldHead);
        expect(list.length).toBe(2);
    })
})


describe('#getByIndex',()=>{
    describe("with index less than 0",()=>{
        test("it should return null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(-1).toBe(null)) 
        })    
    })

    describe("with index greater than length",()=>{
        test("it should return null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(-1).toBe(null)) 
        })
    })
})