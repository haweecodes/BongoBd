const anagram = require("./anagram");

test('should return true', () => {
    expect(anagram('list12en','silent')).toBe(true);
})
