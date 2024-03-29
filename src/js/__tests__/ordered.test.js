const orderByProps = require('../app');

describe('orderByProps function', () => {
    test('возвращать массив объектов, отсортированных в указанном порядке и в алфавитном порядке', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const order = ["name", "level"];

        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 }
        ]);
    });

    test('возвращать пустой массив', () => {
        const obj = {};
        const order = ["name", "level"];

        const result = orderByProps(obj, order);

        expect(result).toEqual([]);
    });

    test('должен возвращать свойства, отсортированные в алфавитном порядке, если порядок не указан', () => {
        const obj = { b: 2, c: 3, a: 1 };

        const result = orderByProps(obj, []);

        expect(result).toEqual([
            { key: "a", value: 1 },
            { key: "b", value: 2 },
            { key: "c", value: 3 }
        ]);
    });

    test('возвращать свойства, отсортированные в алфавитном порядке, если указанный порядок не включает все свойства', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const order = ["name"];

        const result = orderByProps(obj, order);

        expect(result).toEqual([
            { key: "name", value: "мечник" },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
            { key: "level", value: 2 }
        ]);
    });
});