const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');

test("creates an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "John", id: "2002002" },
        zookeepers
    );

    expect(zookeeper.name).toBe("John");
    expect(zookeeper.id).toBe("2002002");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
        {
            id: "4",
            name: "Linda",
            age: 48,
            favoriteAnimal: "otter",
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 67 }, startingZookeepers)

    expect(updatedZookeepers.length).toEqual(1);
});

test("find by id", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
        {
            id: "4",
            name: "Linda",
            age: 48,
            favoriteAnimal: "otter",
          },
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Isabella");
});

test("validates age", () => {
    const zookeeper = {
        id: "3",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear",
    };

    const invalidZookeeper = {
        id: "4",
        name: "Linda",
        age: "48",
        favoriteAnimal: "otter",
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});